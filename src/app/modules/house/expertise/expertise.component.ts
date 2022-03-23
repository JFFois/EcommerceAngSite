import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-house-expertise-component',
    templateUrl: './expertise.component.html'
})

export class HouseExpertiseComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.HOUSE.EXPERTISE.';
    }

    public goToContact(): void {
        this.router.navigate(['/house/contact']);
    }
}