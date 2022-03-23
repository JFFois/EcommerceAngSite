import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-service-adjust-size-component',
    templateUrl: './adjust-size.component.html'
})

export class ServiceAdjustSizeComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.SERVICE.ADJUST-SIZE.';
    }

    public goToBaguier(): void {
        this.router.navigate(['']);
    }

    public goToCollection(): void {
        this.router.navigate(['/landing-page/jewelery']);
    }
}