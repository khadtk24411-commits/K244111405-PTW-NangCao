import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceProductImageEvent }
  from './service-product-image-event/service-product-image-event';

import { ServiceProductImageEventDetail }
  from './service-product-image-event-detail/service-product-image-event-detail';

import { Categorizeproduct }
  from './categorizeproduct/categorizeproduct';

import { CustomerListComponent }
  from './customer-list-component/customer-list-component';

import { Customerlistcallhttpservice }
  from './customerlistcallhttpservice/customerlistcallhttpservice';


const routes: Routes = [

  {
    path: 'categorizeproduct',
    component: Categorizeproduct
  },

  {
    path: 'service-product-image-event',
    component: ServiceProductImageEvent
  },

  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetail
  },

  {
    path: 'customer-list-component',
    component: CustomerListComponent
  },

  {
    path: 'customerlistcallhttpservice',
    component: Customerlistcallhttpservice
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
