import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        TranslateModule.forChild()
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: []
})

export class ShellModule {}