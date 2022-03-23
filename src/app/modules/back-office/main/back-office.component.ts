import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'bp-back-office-component',
    templateUrl: './back-office.component.html'
})

export class BackOfficeComponent {
    public pretrad: string;
    public items: any[];

    constructor(
        private router: Router
    ) {

    }
}