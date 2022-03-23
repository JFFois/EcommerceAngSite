import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


import { PurposeMainComponent } from './main/purpose-main.component';
import { PurposeRoutingModule } from './purpose-routing.module';


@NgModule({
    declarations: [
        PurposeMainComponent
    ],
    imports: [
        SharedModule,
        PurposeRoutingModule,
        ButtonModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
    ]
})

export class PurposeModule {}