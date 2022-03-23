import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UUID } from 'angular2-uuid';

import { CustomJsonConvert } from '../../utils/json/json-converter.utils';
import { BaseModel } from '../beans/base.model';

@Injectable()
export abstract class AbstractRestService<T extends BaseModel> {
    protected urlRest: string;
    protected jsonConvert: CustomJsonConvert;

    constructor(
        protected http: HttpClient
    ) {
        this.urlRest = process.env.API_URL;
        this.jsonConvert = new CustomJsonConvert();
    }

    public getByUuid(uuid: UUID, type: (new () => T)): Promise<T> {
        return this.http.get(this.urlRest + uuid)
            .toPromise()
            .then(this.extractData)
            .then((data) => {
                return this.jsonConvert.deserializeObject(data, type);
            });
    }

    public getByReference(reference: string, type: (new () => T)): Promise<T> {
        return this.http.get(this.urlRest + reference)
            .toPromise()
            .then(this.extractData)
            .then((data) => {
                return this.jsonConvert.deserializeObject(data, type);
            });
    }

    public getList(type: (new () => T)): Promise<T[]> {
        return this.http.get(`${this.urlRest}${type['service']}/all`)
            .toPromise()
            .then(this.extractData)
            .then((data) => this.deserializeItemList(data, type));
    }

    public save(item: T): Observable<T> {
        return this.http.post(
            `${this.urlRest}${item.constructor['service']}/save`,
            this.jsonConvert.serialize(item)
        ).map((res: Response) => {
            return this.jsonConvert.deserializeObject(
                this.extractData(res), item.constructor as any
            );
        });
    }

    protected extractData(res: Response) {
        if (res) {
            return res
        } else {
            return {};
        }
    }

    protected deserializeItemList(data: any, type: (new () => T)): T[] {
        const itemList = new Array<T>();
        data.forEach((element: any) => {
            itemList.push(this.jsonConvert.deserializeObject(element, type));
        });
        return itemList;
    }
}