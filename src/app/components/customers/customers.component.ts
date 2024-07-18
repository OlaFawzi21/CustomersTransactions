import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer, Transaction } from './../../interfaces/customer';

@Component( {
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
} )
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  transactions: Transaction[] = [];
  constructor( private customer_service: CustomerService ) { }

  ngOnInit() {
    this.getCustomersAndTransactions();
  }

  getCustomersAndTransactions() {
    forkJoin( {
      customers: this.customer_service.getCustomers(),
      transactions: this.customer_service.getTransactions()
    } ).subscribe( {
      next: ( { customers, transactions } ) => {
        this.customers = customers;
        this.transactions = transactions;
        this.getNOTrans();
      },
      error: ( err ) => {
        console.log( err );
      }
    } );
  }

  getNOTrans() {
    this.customers.forEach( ( customer ) => {
      customer.no_transactions = this.transactions.filter( trans => trans.customer_id === customer.id ).length;
    } );
  }

  trackByCustomer(index: number, customer: Customer): number {
    return customer.id;
  }
}
