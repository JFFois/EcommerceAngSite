import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';


import { EthicComponent } from './main/ethic.component';
import { EthicsRoutingModule } from './ethics-routing.module';


@NgModule({
    declarations: [
        EthicComponent
    ],
    imports: [
        SharedModule,
        EthicsRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        SelectButtonModule,
        InputTextareaModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
    ]
})

export class EthicsModule {}