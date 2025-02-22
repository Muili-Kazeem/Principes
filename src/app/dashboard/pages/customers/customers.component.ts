import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../../data-access/home.service';
import { ICustomer, ICustomerData, INewCustomer, IPagination } from '../../models/customer';
import { CustomerStatusCountDTO, InitialCustomerStatusCountDTO, InitialSearchDTO, SearchDTO } from '../../models/customer-filter';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { StatusEnum } from '../../models/status.model';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit, OnDestroy {

  searchQuery: SearchDTO = {
    ...InitialSearchDTO,
  };

  customerCount: CustomerStatusCountDTO = {
    ...InitialCustomerStatusCountDTO,
  };
  hasCountedCustomer = false;
  createCustomerDialog = false;

  loading: boolean = true;
  customerSub!: Subscription;
  searchSub!: Subscription | undefined;
  status = StatusEnum;

  search = "";
  first: number = 0;
  totalRecord: number= 0;
  rows: number = 15;
  tableSearch = "";
  customers!: ICustomerData[];
  customerPagination!: IPagination;
  selectedCustomers!: ICustomer[];

  filterForm!: FormGroup;
  newCustomerForm!: FormGroup;

  newCustomerData!: INewCustomer;

  constructor(
    private _home: HomeService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initFilterForm();
    this.initNewCustomerForm()
    this.getCustomer();

    this.searchSub = this.filterForm.get('search')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((search) => {
      this.searchQuery.page = 1;
      this.searchQuery.searchParams = search;
      this.getCustomer();
    });
  }

  getCustomer() {
    this.loading = true;
    this.customerSub = this._home.getCustomers(this.searchQuery).subscribe(
      (data) => {
        this.customers = data.data;
        this.customerPagination = data.pagination;
        this.totalRecord = data.pagination.total;
        this.loading = false;

        // if (!this.hasCountedCustomer) {
          this.countCustomerStatus(this.customers);
        // }
      }
    );
  }

  getStatusClass(status: string) {
    switch (status.toLowerCase()) {
      case this.status.active:
        return 'bg-princepsActiveStatusBg text-princepsActiveStatusText';
      case this.status.inactive:
        return 'bg-princepsInactiveStatusBg text-princepsInactiveStatusText';
      case this.status.dormant:
        return 'bg-princepsDormantStatusBg text-princepsDormantStatusText';
      case this.status.overdue:
        return 'bg-princepsOverdueStatusBg text-princepsOverdueStatusText';
      default:
        return 'bg-princepsOverdueStatusBg text-princepsOverdueStatusText'; // Default class if no match
    }
  }

  openCreateNewCustomerDialog() {
    this.createCustomerDialog = true;
    console.log("Writing new customer");
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      search: [""],
    });
  }

  initNewCustomerForm() {
    this.newCustomerForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      telephone: ["", Validators.required],
      bvn: ["", Validators.required],
      dob: ["", Validators.required],
      residential_address: ["", Validators.required],
      state: ["", Validators.required],
      bankcode: ["", Validators.required],
      accountnumber: ["", Validators.required],
      company_id: ["", Validators.required],
      email: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
    });
  }

  onPageChange(event: any) {
    this.first = event.first as number;
    this.rows = event.rows as number;
    console.log(event);
    this.searchQuery.page = event.page + 1;
    this.getCustomer();
  }

  save() {
    console.log("WHo knows");
  }

  createNewCustomer() {
    this.newCustomerData = { ...this.newCustomerForm.value };
    this._home.createCustomer(this.newCustomerData).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  countCustomerStatus(customers: ICustomerData[]) {
    this.customerCount = { ...InitialCustomerStatusCountDTO };

    customers.forEach((customer) => {
      if (this.customerCount.hasOwnProperty(customer.status.toLowerCase())) {
        this.customerCount[customer.status.toLowerCase() as keyof CustomerStatusCountDTO]++;
      }
    });
    this.hasCountedCustomer = true;
  }

  ngOnDestroy(): void {
    if (this.customerSub) {
      this.customerSub.unsubscribe();
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }
}
