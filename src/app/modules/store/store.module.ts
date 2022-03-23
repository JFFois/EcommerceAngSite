import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


import { StoreMainComponent } from './main/store-main.component';
import { StoreRoutingModule } from './store-routing.module';



@NgModule({
    declarations: [
        StoreMainComponent
    ],
    imports: [
        SharedModule,
        StoreRoutingModule,
        ButtonModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
    ]
})

export class StoreModule {}