import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';

import { ContactComponent } from './main/contact-main.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        SharedModule,
        ContactRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        SelectButtonModule,
        InputTextareaModule,
		CheckboxModule,
		RadioButtonModule,
		DropdownModule,
        TranslateModule.forChild()
    ],
    exports: [],
    providers: [
    ]
})

export class ContactModule {}