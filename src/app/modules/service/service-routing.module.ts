import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceAdjustSizeComponent } from './adjust-size/adjust-size.component';

export const landingRoutes: Routes = [
    { path: 'adjust-size', component: ServiceAdjustSizeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(landingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ServiceRoutingModule { }