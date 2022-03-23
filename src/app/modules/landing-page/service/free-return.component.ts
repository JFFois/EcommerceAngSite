import { Component } from '@angular/core';

@Component({
    selector: 'bp-landing-page-free-return-component',
    templateUrl: './free-return.component.html'
})

export class LandingPageFreeReturnComponent {
    public pretrad: string;

    constructor () {
        this.pretrad = 'MODULES.LANDING-PAGE.SERVICE.FREE-RETURN.';
    }
}