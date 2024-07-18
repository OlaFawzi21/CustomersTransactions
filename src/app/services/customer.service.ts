import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, Transaction } from '../interfaces/customer';

@Injectable( {
  providedIn: 'root'
} )
export class CustomerService {

  constructor( private http: HttpClient ) { }

  private apiUrl = "https://my-json-server.typicode.com/abeeraly983/host-json-api";

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>( this.apiUrl + "/customers" );
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>( this.apiUrl + "/transactions" );
  }
}
