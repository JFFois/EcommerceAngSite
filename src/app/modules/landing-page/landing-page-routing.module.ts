import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageBasketComponent } from './basket/basket.component';
import { LandingPageBeingReasonComponent } from './being-reason/being-reason.component';
import { LandingPageNoticeComponent } from './legal/notice.component';
import { LandingPagePersonalDataComponent } from './legal/personal-data.component';
import { LandingPageSalesTermsComponent } from './legal/sales-terms.component';
import { LandingPageComponent } from './main/landing-page.component';
import { LandingPageJeweleryComponent } from './product/jewelery.component';
import { LandingPageProductComponent } from './product/product.component';
import { LandingPageDeliveryComponent } from './service/delivery.component';
import { LandingPageFreeReturnComponent } from './service/free-return.component';
import { LandingPageWarrantyComponent } from './service/warranty.component';

export const landingRoutes: Routes = [
    { path: 'main', component: LandingPageComponent },
    { path: 'product/:reference', component: LandingPageProductComponent },
    { path: 'basket', component: LandingPageBasketComponent },
    { path: 'warranty', component: LandingPageWarrantyComponent },
    { path: 'sales-terms', component: LandingPageSalesTermsComponent },
    { path: 'free-return', component: LandingPageFreeReturnComponent },
    { path: 'personal-data', component: LandingPagePersonalDataComponent },
    { path: 'delivery', component: LandingPageDeliveryComponent },
    { path: 'notice', component: LandingPageNoticeComponent },
    { path: 'being-reason', component: LandingPageBeingReasonComponent },
    { path: 'jewelery', component: LandingPageJeweleryComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(landingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LandingPageRoutingModule { }