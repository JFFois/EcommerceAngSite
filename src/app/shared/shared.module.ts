import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';

import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        CoreModule,
        ReactiveFormsModule,
        CommonModule,
        /* PrimeNg */
        ToastModule,
        TabMenuModule,
        ButtonModule,
        AccordionModule,
        MenuModule
    ],
    providers: []
})

export class SharedModule { }