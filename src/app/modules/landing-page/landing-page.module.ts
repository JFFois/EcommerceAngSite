import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './main/landing-page.component';
import { LandingPageProductComponent } from './product/product.component';
import { ProductService } from '../../model/services/product/product.service';
import { MetalService } from '../../model/services/product/metal.service';
import { LandingPageBasketComponent } from './basket/basket.component';
import { LandingPageDeliveryComponent } from './service/delivery.component';
import { LandingPageFreeReturnComponent } from './service/free-return.component';
import { LandingPageNoticeComponent } from './legal/notice.component';
import { LandingPagePersonalDataComponent } from './legal/personal-data.component';
import { LandingPageSalesTermsComponent } from './legal/sales-terms.component';
import { LandingPageWarrantyComponent } from './service/warranty.component';
import { LandingPageBeingReasonComponent } from './being-reason/being-reason.component';
import { LandingPageJeweleryComponent } from './product/jewelery.component';
import { LandingPagePaymentModesComponent } from './payment/payment-modes.component';
import {
    LandingPagePersonalInformationsComponent
} from './payment/personal-informations.component';

@NgModule({
    declarations: [
        LandingPageComponent,
        LandingPageProductComponent,
        LandingPageBasketComponent,
        LandingPageDeliveryComponent,
        LandingPageFreeReturnComponent,
        LandingPageNoticeComponent,
        LandingPagePersonalDataComponent,
        LandingPageSalesTermsComponent,
        LandingPageWarrantyComponent,
        LandingPageBeingReasonComponent,
        LandingPageJeweleryComponent,
        LandingPagePaymentModesComponent,
        LandingPagePersonalInformationsComponent
    ],
    imports: [
        SharedModule,
        LandingPageRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        CarouselModule,
        CheckboxModule,
        SelectButtonModule,
        InputTextareaModule,
        TabViewModule,
        AccordionModule,
        CardModule,
        DialogModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
        ProductService,
        MetalService
    ]
})

export class LandingPageModule {}