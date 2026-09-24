
import { Component, signal } from '@angular/core';

import { CustomerType } from '../classes/IPCustomer';
import { CustomerService } from '../service/customer-service';

@Component({
  selector: 'app-customerlistcallhttpservice',
  standalone: false,
  styleUrl: './customerlistcallhttpservice.css',
  templateUrl: './customerlistcallhttpservice.html',
})
export class Customerlistcallhttpservice {

  customerTypes = signal<CustomerType[]>([]);

  constructor(private _service: CustomerService) {

  }

  ngOnInit(): void {
    this._service.getCustomerTypes().subscribe({
      next: (data) => {
        this.customerTypes.set(data);
      },

      error: (err) => {
        console.error(err);
        alert("Error fetching customer list: " + JSON.stringify(err));
      }
    });
  }
}

