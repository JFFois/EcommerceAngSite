import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-purpose-component',
    templateUrl: './purpose-main.component.html'
})

export class PurposeMainComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.PURPOSE.';
    }

    public goToCollection(): void {
        this.router.navigate(['/landing-page/jewelery']);
    }
}
