export interface ICustomer {
  data: ICustomerData[];
  pagination: IPagination;
}

export interface ICustomerData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  telephone: string;
  status: string;
  upload_history_id: string;
  is_blacklisted: number;
  is_bulk_uploaded: number;
  created_at: string;
}



export interface INewCustomer {
  firstname: string;
  lastname: string;
  telephone: string;
  bvn: string;
  dob: string;
  residential_address: string;
  state: string;
  bankcode: string;
  accountnumber: string;
  company_id: string;
  email: string;
  city: string;
  country: string;
  id_card: string | null;
  voters_card: string | null;
  drivers_licence: string | null;
}

export interface ICustomerResponse {
  status: string | null;
  message: string | null;
  data: ICustomer
}

export interface IPagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  links: {
    first: string;
    last: string;
    prev: string;
    next: string;
  }
}
