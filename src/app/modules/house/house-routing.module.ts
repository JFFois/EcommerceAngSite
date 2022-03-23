import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseContactComponent } from './contact/contact.component';
import { HouseEthicsComponent } from './ethics/ethics.component';
import { HouseExpertiseComponent } from './expertise/expertise.component';
import { HousePurposeComponent } from './purpose/purpose.component';

export const landingRoutes: Routes = [
    { path: 'contact', component: HouseContactComponent },
    { path: 'ethics', component: HouseEthicsComponent },
    { path: 'expertise', component: HouseExpertiseComponent },
    { path: 'purpose', component: HousePurposeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(landingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HouseRoutingModule { }