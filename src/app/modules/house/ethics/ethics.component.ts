import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-house-ethics-component',
    templateUrl: './ethics.component.html'
})

export class HouseEthicsComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.HOUSE.ETHICS.';
    }

    public goToGems(): void {
        this.router.navigate(['']);
    }

    public goToGoldPlatine(): void {
        this.router.navigate(['']);
    }

    public goToExpertise(): void {
        this.router.navigate(['/house/expertise']);
    }
}