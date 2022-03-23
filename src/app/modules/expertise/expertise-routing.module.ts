import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertiseMainComponent } from './main/expertise-main.component';

const appRoutes: Routes = [
    { path: '', component: ExpertiseMainComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ExpertiseRoutingModule { }