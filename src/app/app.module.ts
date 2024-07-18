import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { CustomerTransactionsComponent } from './components/customer-transactions/customer-transactions.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule( {
  declarations: [
    AppComponent,
    CustomersComponent,
    AllTransactionsComponent,
    CustomerTransactionsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
