import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-ethics-component',
    templateUrl: './ethic.component.html'
})

export class EthicComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.ETHICS.';
    }

    public goToGems(): void {
        this.router.navigate(['']);
    }

    public goToGoldPlatine(): void {
        this.router.navigate(['']);
    }

    public goToExpertise(): void {
        this.router.navigate(['/expertise']);
    }
}