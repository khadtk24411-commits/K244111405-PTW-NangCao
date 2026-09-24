import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerType } from '../classes/IPCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'assets/data/customers.json';

  constructor(private http: HttpClient) {}

  getCustomerTypes(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.url);
  }
}
