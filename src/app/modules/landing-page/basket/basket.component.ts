import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FinalProduct } from '../../../model/beans/product/final-product.model';

@Component({
    selector: 'bp-landing-page-basket-component',
    templateUrl: './basket.component.html'
})

export class LandingPageBasketComponent implements OnInit {
    public pretrad: string;
    public products: FinalProduct[];
    public subTotal: number;
    public total: number;
    public deliveryDate: Date;
    public urlRest: string;
    public displayDialog: boolean;
    public tempProduct: FinalProduct;

    constructor(
        private router: Router
    ) {
        this.pretrad = 'MODULES.LANDING-PAGE.BASKET.';

        this.urlRest = process.env.API_URL.slice(0, -1);

        this.displayDialog = false;

        this.tempProduct = new FinalProduct();
        this.products = [];
        this.subTotal = 0;
        this.total = 0;
        this.deliveryDate = new Date();
        this.deliveryDate.setDate(this.deliveryDate.getDate() + 22);
    }

    public ngOnInit(): void {
        const finalProducts = JSON.parse(localStorage.getItem('finalProducts'));
        if(finalProducts !== null) {
            this.initBasket(finalProducts);
        }
    }

    private initBasket(finalProducts: [FinalProduct]): void {
        this.products = finalProducts;
        this.subTotal = 0;
        this.products.forEach(product => {
            this.subTotal += product.price + product.metal.price;
        });
        this.total = this.subTotal;
    }

    public openConfirmDialog(product: FinalProduct): void {
        this.tempProduct = product;
        this.displayDialog = true;
    }

    public removeProduct() {
        const finalProducts: [FinalProduct] = JSON.parse(localStorage.getItem('finalProducts'));
        if(finalProducts !== null) {
            finalProducts.splice(finalProducts.indexOf(this.tempProduct), 1);
            this.initBasket(finalProducts);
            localStorage.setItem('finalProducts', JSON.stringify(finalProducts));
        }
        this.displayDialog = false;
    }

    public goToCollection(): void {
        this.router.navigate(['/landing-page/jewelery']);
    }

    public order(): void {
//
    }
}