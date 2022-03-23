import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { MessageModule } from 'primeng/message';

import { HouseRoutingModule } from './house-routing.module';
import { ProductService } from '../../model/services/product/product.service';
import { MetalService } from '../../model/services/product/metal.service';
import { HouseExpertiseComponent } from './expertise/expertise.component';
import { HouseEthicsComponent } from './ethics/ethics.component';
import { HouseContactComponent } from './contact/contact.component';
import { HousePurposeComponent } from './purpose/purpose.component';


@NgModule({
    declarations: [
        HouseEthicsComponent,
        HouseExpertiseComponent,
        HouseContactComponent,
        HousePurposeComponent
    ],
    imports: [
        SharedModule,
        HouseRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        CheckboxModule,
        InputTextareaModule,
        AccordionModule,
        SelectButtonModule,
        ReactiveFormsModule,
        MessageModule,
        TranslateModule.forChild()
    ],
    exports: [
        MessageModule
    ],
    providers: [
        ProductService,
        MetalService
    ]
})

export class HouseModule {}