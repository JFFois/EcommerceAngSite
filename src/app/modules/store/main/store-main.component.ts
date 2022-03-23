import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-store-component',
    templateUrl: './store-main.component.html'
})

export class StoreMainComponent {
    public pretrad: string;

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.STORE.';
    }
}