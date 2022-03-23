import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-ethics-component',
    templateUrl: './expertise-main.component.html'
})

export class ExpertiseMainComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.EXPERTISE.';
    }

    public goToContact(): void {
        this.router.navigate(['/contact']);
    }
}