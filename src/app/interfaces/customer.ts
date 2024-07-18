export interface Customer {
    id: number,
    name: string,
    no_transactions: number
}

export interface Transaction {
    "id": number,
    "name": string,
    "customer_id": number,
    "date": string,
    "amount": number
}
