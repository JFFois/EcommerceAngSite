import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-landing-page-being-reason-component',
    templateUrl: './being-reason.component.html'
})

export class LandingPageBeingReasonComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.LANDING-PAGE.BEING-REASON.';
    }

    public goToCollection(): void {
        this.router.navigate(['/landing-page/jewelery']);
    }
}