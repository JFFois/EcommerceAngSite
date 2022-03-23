import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/beans/order/order';
import { OrderService } from '../../../model/services/back-office/orders.service';


@Component({
    selector: 'bp-back-office-orders-component',
    templateUrl: './orders.component.html'
})

export class BackOfficeOrdersComponent {
    public pretrad: string;
    public orders: Order[];

    loading: boolean = true;

    constructor(
        private router: Router,
         private orderService: OrderService
    ) {
        this.pretrad = 'MODULES.BACK-OFFICE.ORDERS.';

    }

    ngOnInit() {
        this.orderService.getOrdersLarge().then(orders => {
            this.orders = orders;
            this.loading = false;
        });
    }
    
    public goToOrder(): void {
        this.router.navigate(['/back-office/order']);
    }
}