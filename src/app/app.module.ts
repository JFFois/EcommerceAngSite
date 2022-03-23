import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { MessageService } from 'primeng/api';

import './../styles/styles.scss';
import './../styles/responsive.scss';
import './../styles/primeng-override.scss';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ShellModule } from './shell/shell.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        ShellModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot()
    ],
    providers: [
        HttpClient,
        MessageService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}