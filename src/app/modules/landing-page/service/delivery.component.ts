import { Component } from '@angular/core';

@Component({
    selector: 'bp-landing-page-delivery-component',
    templateUrl: './delivery.component.html'
})

export class LandingPageDeliveryComponent {
    public pretrad: string;

    constructor () {
        this.pretrad = 'MODULES.LANDING-PAGE.SERVICE.DELIVERY.';
    }
}