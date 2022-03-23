import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { SelectItem } from 'primeng/api';
import { Carousel } from 'primeng/carousel';
import { TabPanel } from 'primeng/tabview';

import { FinalProduct } from '../../../model/beans/product/final-product.model';
import { Product } from '../../../model/beans/product/product.model';
import { ProductService } from '../../../model/services/product/product.service';

@Component({
    selector: 'bp-landing-page-product-component',
    templateUrl: './product.component.html'
})

export class LandingPageProductComponent implements OnInit, AfterViewChecked {
    public pretrad: string;
    public product: Product;
    public calculatedPrice: number;
    public page: number;
    public isEngraved: boolean;
    public fontStyles: SelectItem[];
    public engravingStyle: string;
    public engraving: string;
    public finalProduct: FinalProduct;
    public urlRest: string;
    public tabviewVisible: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService,
        private translateService: TranslateService
    ) {
        this.pretrad = 'MODULES.LANDING-PAGE.PRODUCT.';

        Carousel.prototype.onTouchMove = () => {/* DO NOT REMOVE */};

        this.urlRest = process.env.API_URL.slice(0, -1);
        this.product = new Product();
        this.finalProduct = new FinalProduct();

        this.calculatedPrice = 0;

        this.fontStyles = [
            {label: 'Kévin & Carla', value: 'italic'},
            {label: 'Kévin & Carla', value: 'normal'}
        ];

        this.finalProduct.isEngraved = false;
        this.finalProduct.engravingText = '';
        this.finalProduct.engravingFont = this.fontStyles[0].value;

        this.page = 2;

        this.tabviewVisible = false;
    }

    ngOnInit(): void {
        // this.translateService.onLangChange.subscribe(() => {
            setTimeout(() => this.tabviewVisible = true, 0);
        // })

        const reference: string = this.route.snapshot.paramMap.get('reference');
        this.productService.getByReference(reference, Product).then(
            (response) => {
                this.product = response;
                this.finalProduct.price = this.product.price;
                this.finalProduct.label = this.product.label;
                this.finalProduct.reference = this.product.reference;
                this.processCalculs();
            },
            (error) => {
                console.error(error);
            }
        )
        this.initLocalStorage();
    }

    ngAfterViewChecked(): void {
        const buttons = document.getElementsByClassName('cs-product-button-picker');
        if(buttons !== null && buttons !== undefined && buttons.length > 0) {
            for(const button of Array.from(buttons)) {
                button.classList.remove('cs-active');
            }
            buttons[this.page].classList.add('cs-active');
        }
    }

    public initLocalStorage(): void {
        let finalProducts = JSON.parse(localStorage.getItem('finalProducts'));
        if(finalProducts === null) {
            finalProducts = [];
            localStorage.setItem('finalProducts', JSON.stringify(finalProducts));
            localStorage.setItem('lastId', JSON.stringify({id: 0}));
        }
    }

    public onPageChange(event: Event): void {
        this.page = event['page'];
        this.processCalculs();
    }

    public onPickMetal(index: number): void {
        this.page = index;
        this.processCalculs();
    }

    public processCalculs(): void {
        this.calculatedPrice = this.product.price + this.product.metalList[this.page].price;
        this.finalProduct.metal = this.product.metalList[this.page];
    }

    public onAddToBasket(): void {
        const finalProducts: [FinalProduct] = JSON.parse(localStorage.getItem('finalProducts'));
        let lastId: number = JSON.parse(localStorage.getItem('lastId')).id;
        this.finalProduct.id = lastId;
        finalProducts.push(this.finalProduct);
        localStorage.setItem('finalProducts', JSON.stringify(finalProducts));
        localStorage.setItem('lastId', JSON.stringify({id: lastId++}));
        this.router.navigate(['/landing-page/basket']);
    }
}