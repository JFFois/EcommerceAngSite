import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-ethics-component',
    templateUrl: './adjust-size-main.component.html'
})

export class AdjustSizeMainComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.ADJUST-SIZE.';
    }
}