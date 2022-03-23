import { Component } from '@angular/core';
@Component({
    selector: 'bp-landing-page-warranty-component',
    templateUrl: './warranty.component.html'
})

export class LandingPageWarrantyComponent {
    public pretrad: string;

    constructor () {
        this.pretrad = 'MODULES.LANDING-PAGE.SERVICE.WARRANTY.';
    }
} 