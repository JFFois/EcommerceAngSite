import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractRestService } from '../../../core/model/services/abstract-rest.service';
import { Product } from '../../beans/product/product.model';

@Injectable()
export class ProductService extends AbstractRestService<Product> {

    constructor(
        protected http: HttpClient
    ) {
        super(http);

        this.urlRest += 'product/';
    }
}