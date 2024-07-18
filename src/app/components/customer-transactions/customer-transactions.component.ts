import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Chart from 'chart.js/auto';

@Component( {
    selector: 'app-customer-transactions',
    templateUrl: './customer-transactions.component.html',
    styleUrls: ['./customer-transactions.component.scss']
} )
export class CustomerTransactionsComponent {
    transactions: Transaction[] = [];
    customerTransactions: Transaction[] = [];
    id: number;
    chart: any;

    constructor( private customer_service: CustomerService, activeRoute: ActivatedRoute ) {
        activeRoute.params.subscribe( ( params ) => {
            this.id = +params['id'];
        } );
    }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions() {
        this.customer_service.getTransactions().subscribe( {
            next: transactions => {
                this.transactions = transactions;
                this.getCustomerTrans();
            },
            error: err => console.log( err )
        } );
    }

    getCustomerTrans() {
        this.customerTransactions = this.transactions.filter( trans => trans.customer_id === this.id );
        this.updateChart();
    }

    updateChart() {
        const data = this.convertTransToObj( this.customerTransactions );
        const canvas = document.getElementById( 'canvas' ) as HTMLCanvasElement;
        this.chart = new Chart( canvas, {
            type: 'bar',
            data: {
                labels: Object.keys( data ),
                datasets: [{
                    label: 'Total Amount per Day',
                    data: Object.values( data ),
                    backgroundColor: 'rgba(242, 192, 37, .8)',
                    borderColor: 'rgb(242, 192, 37)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#fff',
                        }
                    },
                    x: {
                        ticks: {
                            color: '#fff',
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                }
            },

        } );
    }

    convertTransToObj( trans: Transaction[] ) {
        const data: any = {};
        trans.forEach( item => data[item.date] = item.amount );
        return data;
    }

    trackByTrans( index: number, trans: Transaction ): number {
        return trans.id;
    }
}