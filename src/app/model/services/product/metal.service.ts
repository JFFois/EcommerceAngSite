import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractRestService } from '../../../core/model/services/abstract-rest.service';
import { Metal } from '../../beans/product/metal.model';

@Injectable()
export class MetalService extends AbstractRestService<Metal> {

    constructor(
        protected http: HttpClient
    ) {
        super(http);

        this.urlRest += 'metal/';
    }
}