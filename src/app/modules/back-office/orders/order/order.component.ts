import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../../model/beans/order/order';
import { OrderService } from '../../../../model/services/back-office/orders.service';


@Component({
    selector: 'bp-back-office-orders-component',
    templateUrl: './order.component.html'
})

export class BackOfficeOrderComponent {
    public pretrad: string;
    public order: Order;

    loading: boolean = true;

    constructor(
        private router: Router,
         private orderService: OrderService
    ) {
        this.pretrad = 'MODULES.BACK-OFFICE.ORDER.';

        this.order = new Order([]);
    }

    ngOnInit() {
        this.orderService.getOrder().then(order => {
            console.log(this.order)
            console.log(order);
            this.order = order;
            this.loading = false;
        });
    }

}