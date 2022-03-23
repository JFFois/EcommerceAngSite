import { Component } from '@angular/core';

@Component({
    selector: 'bp-landing-page-notice-component',
    templateUrl: './notice.component.html'
})

export class LandingPageNoticeComponent {
    public pretrad: string;

    constructor () {
        this.pretrad = 'MODULES.LANDING-PAGE.LEGAL.NOTICE.';
    }
}