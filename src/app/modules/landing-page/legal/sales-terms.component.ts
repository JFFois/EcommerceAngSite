import { Component } from '@angular/core';

@Component({
    selector: 'bp-landing-page-sales-terms-component',
    templateUrl: './sales-terms.component.html'
})

export class LandingPageSalesTermsComponent {
    public pretrad: string;

    constructor () {
        this.pretrad = 'MODULES.LANDING-PAGE.LEGAL.SALES-TERMS.';
    }
}