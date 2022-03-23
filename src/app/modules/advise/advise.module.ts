import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';

import { AdviseRoutingModule } from './advise-routing.module';
import { ProductService } from '../../model/services/product/product.service';
import { MetalService } from '../../model/services/product/metal.service';


@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        AdviseRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        CheckboxModule,
        InputTextareaModule,
        AccordionModule,
        SelectButtonModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
        ProductService,
        MetalService
    ]
})

export class AdviseModule {}