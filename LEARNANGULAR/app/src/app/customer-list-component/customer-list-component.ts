import { Component, OnInit } from '@angular/core';
import { CustomerType } from '../classes/IPCustomer';
import { CustomerService } from '../service/customer-service';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  templateUrl: './customer-list-component.html',
  styleUrl: './customer-list-component.css'
})
export class CustomerListComponent implements OnInit {

  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerTypes = this.customerService.getCustomers();
  }

  trackCustomerTypeId(index: number, type: CustomerType): number {
    return type.CustomerTypeId;
  }

  trackCustomerId(index: number, customer: any): string {
    return customer.Id;
  }
}