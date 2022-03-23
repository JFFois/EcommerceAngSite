import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EthicComponent } from './main/ethic.component';

const appRoutes: Routes = [
    { path: '', component: EthicComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class EthicsRoutingModule { }