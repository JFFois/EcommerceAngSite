import { Component, OnInit } from '@angular/core';

import { Product } from '../../../model/beans/product/product.model';
import { ProductService } from '../../../model/services/product/product.service';

@Component({
    selector: 'bp-landing-page-jewelery-component',
    templateUrl: './jewelery.component.html'
})

export class LandingPageJeweleryComponent implements OnInit {
    public pretrad: string;
    public urlRest: string;
    public p1: Product;
    public p2: Product;

    constructor (
        private productService: ProductService
    ) {
        this.pretrad = 'MODULES.LANDING-PAGE.JEWELERY.';

        this.urlRest = process.env.API_URL.slice(0, -1);

        this.p1 = new Product();
        this.p2 = new Product();
    }

    public ngOnInit(): void {
        this.productService.getByReference('P1', Product).then(
            (response) => {
                this.p1 = response;
            },
            (error) => {
                console.error(error);
            }
        );
        this.productService.getByReference('P2', Product).then(
            (response) => {
                this.p2 = response;
            },
            (error) => {
                console.error(error);
            }
        );
    }
}