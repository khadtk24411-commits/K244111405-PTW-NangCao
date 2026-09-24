import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Categorizeproduct } from './categorizeproduct/categorizeproduct';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { CustomerListComponent } from './customer-list-component/customer-list-component';
import { Homework } from './homework/homework';

@NgModule({
  declarations: [
    App,
    Categorizeproduct,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    CustomerListComponent,
    Homework
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],

  bootstrap: [App]
})
export class AppModule {}