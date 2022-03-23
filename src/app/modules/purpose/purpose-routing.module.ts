import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurposeMainComponent } from './main/purpose-main.component';

const appRoutes: Routes = [
    { path: '', component: PurposeMainComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PurposeRoutingModule { }