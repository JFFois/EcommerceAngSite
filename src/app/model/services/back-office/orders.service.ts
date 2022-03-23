import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../beans/order/order';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient) { }

    getOrdersLarge() {
        return this.http.get<any>('/assets/orders-test.json')
            .toPromise()
            .then(res => <Order[]>res.data)
            .then(data => { return data; });
    }

    getOrder() {
        return this.http.get<any>('/assets/orders-test.json')
            .toPromise()
            .then(res => <Order>res.data[0])
            .then(data => { return data; });
    }
}