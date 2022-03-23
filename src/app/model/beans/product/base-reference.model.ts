import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseLabelModel } from '../../../core/model/beans/base-label.model';

@JsonObject('BaseReferenceModel')
export abstract class BaseReferenceModel extends BaseLabelModel {
    @JsonProperty('reference', String)
    public reference: string = null;

    @JsonProperty('price', Number)
    public price: number = null;
}