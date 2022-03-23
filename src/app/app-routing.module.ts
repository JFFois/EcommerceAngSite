import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './model/services/auth/auth-guard.service';

import { LandingPageBasketComponent } from './modules/landing-page/basket/basket.component';
import { LandingPageBeingReasonComponent } from './modules/landing-page/being-reason/being-reason.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { LandingPageNoticeComponent } from './modules/landing-page/legal/notice.component';
import { LandingPagePersonalDataComponent } from './modules/landing-page/legal/personal-data.component';
import { LandingPageSalesTermsComponent } from './modules/landing-page/legal/sales-terms.component';
import { LandingPageComponent } from './modules/landing-page/main/landing-page.component';
import { LandingPageJeweleryComponent } from './modules/landing-page/product/jewelery.component';
import { LandingPageProductComponent } from './modules/landing-page/product/product.component';
import { LandingPageDeliveryComponent } from './modules/landing-page/service/delivery.component';
import { LandingPageFreeReturnComponent } from './modules/landing-page/service/free-return.component';
import { LandingPageWarrantyComponent } from './modules/landing-page/service/warranty.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/login/register.component';
import { UserModule } from './modules/user/user.module';
import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/landing-page/main',
        pathMatch: 'full'
    },
    // {
    //     path: 'home',
    //     component: HomeComponent
    // },
    // {
    //     path: 'user',
    //     children: [
    //         { path: 'login', component: LoginComponent },
    //         { path: 'register', component: RegisterComponent }
    //     ]
    //     // loadChildren: () => UserModule
    //     // loadChildren: './modules/user/user.module#UserModule'
    //     // loadChildren: () => import('./modules/user/user.module')
    //     //     .then(m => m.UserModule)
    // },
    {
        path: 'landing-page',
        children: [
            { path: 'main', component: LandingPageComponent },
            { path: 'product/:reference', component: LandingPageProductComponent },
            { path: 'basket', component: LandingPageBasketComponent },
            { path: 'services/warranty', component: LandingPageWarrantyComponent },
            { path: 'sales-terms', component: LandingPageSalesTermsComponent },
            { path: 'services/free-return', component: LandingPageFreeReturnComponent },
            { path: 'personal-data', component: LandingPagePersonalDataComponent },
            { path: 'services/delivery', component: LandingPageDeliveryComponent },
            { path: 'notice', component: LandingPageNoticeComponent },
            { path: 'being-reason', component: LandingPageComponent },
            { path: 'jewelery', component: LandingPageJeweleryComponent }
        ],
        // loadChildren: () => LandingPageModule
        // loadChildren: './modules/landing-page/landing-page.module#LandingPageModule'
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('./modules/landing-page/landing-page.module')
        //     .then(m => m.LandingPageModule)
    },
    {
        path: 'service',
        loadChildren: () => import(
            './modules/service/service.module'
            ).then(m => m.ServiceModule)
    },
    {
        path: 'house',
        loadChildren: () => import(
            './modules/house/house.module'
            ).then(m => m.HouseModule)
    },
    {
        path: 'advise',
        loadChildren: () => import(
            './modules/advise/advise.module'
            ).then(m => m.AdviseModule)
    },
    {
        path: 'store',
        loadChildren: () => import(
            './modules/store/store.module'
            ).then(m => m.StoreModule)
    },
    {
        path: 'back-office',
        //canActivate: [AuthGuardService],
        loadChildren: () => import(
            './modules/back-office/back-office.module'
            ).then(m => m.BackOfficeModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        UserModule,
        LandingPageModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }