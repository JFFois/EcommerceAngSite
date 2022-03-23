import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseReferenceModel } from './base-reference.model';
import { Metal } from './metal.model';

@JsonObject('Product')
export class Product extends BaseReferenceModel {
    @JsonProperty('presentation', String)
    public presentation: string = null;

    @JsonProperty('description', String)
    public description: string = null;

    @JsonProperty('metalList', [Metal])
    public metalList: Metal[] = [];
}