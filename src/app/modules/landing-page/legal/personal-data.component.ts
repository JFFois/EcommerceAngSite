import { Component } from '@angular/core';

@Component({
    selector: 'bp-landing-page-personal-data-component',
    templateUrl: './personal-data.component.html'
})

export class LandingPagePersonalDataComponent {
    public pretrad: string;

    constructor () {
        this.pretrad = 'MODULES.LANDING-PAGE.LEGAL.PERSONAL-DATA.';
    }
}