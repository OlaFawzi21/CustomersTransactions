import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Customer, Transaction } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component( {
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
} )
export class AllTransactionsComponent {
  customers: Customer[] = [];
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  searchItemName: string = '';
  searchItemAmount: string = '';

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
        this.getCustomerName();
        this.filteredTransactions = transactions; 
      },
      error: ( err ) => {
        console.log( err );
      }
    } );
  }

  getCustomerName() {
    this.transactions.forEach( trans => {
      const data = this.customers.find( customer => customer.id === trans.customer_id );
      if ( data ) trans.name = data.name;
    } )
  }


  applyFilter() {
    this.filteredTransactions = this.transactions.filter(transaction => {
      const namePassed = this.searchItemName === '' || transaction.name.toLowerCase().includes(this.searchItemName.toLowerCase());
      const amountPassed = this.searchItemAmount === '' || transaction.amount.toString() === this.searchItemAmount;
      return namePassed && amountPassed;
    });
  }


  trackByTrans( index: number, trans: Transaction ): number {
    return trans.id;
  }
}
