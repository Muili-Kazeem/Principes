import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ICustomer, ICustomerResponse, INewCustomer } from '../models/customer';
import { SearchDTO } from '../models/customer-filter';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = 'http://160.119.254.236:5085/api/v1';

  constructor(
    private http: HttpClient,
  ) { }

  getCustomers(
    searchQuery: SearchDTO
  ): Observable<ICustomer> {
    const endpoint = `${this.url}/customers`;
    const params: HttpParams = new HttpParams()
      .set('search_text', searchQuery?.searchParams ?? '')
      .set('page_size', searchQuery.pageSize ?? 15)
      .set('page', searchQuery.page ?? 1);

    return this.http.get<ICustomerResponse>(endpoint, { params: params }).pipe(
      map( res => res.data )
    );
  }

  createCustomer(
    customer: INewCustomer
  ): Observable<ICustomer> {
    const endpoint = `${this.url}/customers`;
    return this.http.post<ICustomerResponse>(endpoint, customer).pipe(
      tap( res => {
        // console.log(res)
      } ),
      map( res => res.data )
    );
  }

}
