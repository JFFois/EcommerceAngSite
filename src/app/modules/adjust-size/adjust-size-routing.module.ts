import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdjustSizeMainComponent } from './main/adjust-size-main.component';

const appRoutes: Routes = [
    { path: '', component: AdjustSizeMainComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdjustSizeRoutingModule { }