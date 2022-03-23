import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


import { ExpertiseMainComponent } from './main/expertise-main.component';
import { ExpertiseRoutingModule } from './expertise-routing.module';


@NgModule({
    declarations: [
        ExpertiseMainComponent
    ],
    imports: [
        SharedModule,
        ExpertiseRoutingModule,
        ButtonModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
    ]
})

export class ExpertiseModule {}