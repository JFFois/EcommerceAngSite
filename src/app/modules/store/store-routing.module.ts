import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreMainComponent } from './main/store-main.component';

const appRoutes: Routes = [
    { path: '', component: StoreMainComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class StoreRoutingModule { }