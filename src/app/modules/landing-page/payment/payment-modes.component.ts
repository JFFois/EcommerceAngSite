import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-landing-page-payment-modes-component',
    templateUrl: './payment-modes.component.html'
})

export class LandingPagePaymentModesComponent {
    public pretrad: string;

    constructor() {
        this.pretrad = 'MODULES.LANDING-PAGE.PAYMENT-MODES.';
    }
}