import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        SharedModule,
        UserRoutingModule,
        InputTextModule,
        FormsModule,
        CardModule,
        ButtonModule,
        TranslateModule.forChild()
    ],
    exports: [

    ],
    providers: []
})

export class UserModule {}