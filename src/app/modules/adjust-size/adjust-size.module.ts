import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';


import { AdjustSizeMainComponent } from './main/adjust-size-main.component';
import { AdjustSizeRoutingModule } from './adjust-size-routing.module';



@NgModule({
    declarations: [
        AdjustSizeMainComponent
    ],
    imports: [
        SharedModule,
        AdjustSizeRoutingModule,
        ButtonModule,
        AccordionModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
    ]
})

export class AdjustSizeModule {}