import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { CustomerTransactionsComponent } from './components/customer-transactions/customer-transactions.component';
import { CustomersComponent } from './components/customers/customers.component';
const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customerTransactions/:id', component: CustomerTransactionsComponent },
  { path: 'allTransactions', component: AllTransactionsComponent },
  { path: '**', redirectTo: 'customers' }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
