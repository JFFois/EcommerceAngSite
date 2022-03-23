import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const landingRoutes: Routes = [
];

@NgModule({
    imports: [
        RouterModule.forChild(landingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdviseRoutingModule { }