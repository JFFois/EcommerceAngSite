import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-house-purpose-component',
    templateUrl: './purpose.component.html'
})

export class HousePurposeComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.HOUSE.PURPOSE.';
    }

    public goToCollection(): void {
        this.router.navigate(['/landing-page/jewelery']);
    }
}
