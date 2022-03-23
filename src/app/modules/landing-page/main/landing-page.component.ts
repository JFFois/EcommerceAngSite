import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Carousel } from 'primeng/carousel';

@Component({
    selector: 'bp-landing-page-component',
    templateUrl: './landing-page.component.html'
})

export class LandingPageComponent {
    public pretrad: string;
    public items: any[];

    constructor(
        private router: Router
    ) {
        this.pretrad = 'MODULES.LANDING-PAGE.BEING-REASON.';
        this.items = [
            {url: 'assets/images/landing-page/products/pendentif-pavé/I - photo pendentif pavé or rose.png'},
            {url: 'assets/images/landing-page/products/pendentif-pavé/J - photo pendentif pavé or jaune.png'},
            {url: 'assets/images/landing-page/products/pendentif-pavé/H - photo pendentif pavé or blanc.png'}
        ];

        Carousel.prototype.onTouchMove = () => {/* DO NOT REMOVE*/};
    }

    public goToCollection(): void {
        this.router.navigate(['/landing-page/jewelery']);
    }
}