import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './main/back-office.component';
import { BackOfficeOrderComponent } from './orders/order/order.component';
import { BackOfficeOrdersComponent } from './orders/orders.component';



export const backRoutes: Routes = [
    { path: 'main', component: BackOfficeComponent },
    { path: 'orders', component: BackOfficeOrdersComponent },
    { path: 'order/:reference', component: BackOfficeOrderComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(backRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BackOfficeRoutingModule { }