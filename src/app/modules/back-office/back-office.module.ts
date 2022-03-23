import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './main/back-office.component';
import { BackOfficeOrdersComponent } from './orders/orders.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BackOfficeOrderComponent } from './orders/order/order.component';
import { OrderService } from '../../model/services/back-office/orders.service';
import { CardModule } from 'primeng/card';



@NgModule({
    declarations: [
        BackOfficeComponent,
        BackOfficeOrdersComponent,
        BackOfficeOrderComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        BackOfficeRoutingModule,
        FormsModule,
        ButtonModule,
        CheckboxModule,
        SelectButtonModule,
        TableModule,
        ToastModule,
        HttpClientModule,
        ContextMenuModule,
        InputTextModule,
        InputTextareaModule,
        CardModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
        OrderService
    ]
})

export class BackOfficeModule {}