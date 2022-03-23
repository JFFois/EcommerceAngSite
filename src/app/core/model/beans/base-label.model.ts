import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseModel } from './base.model';

@JsonObject('BaseLabelModel')
export abstract class BaseLabelModel extends BaseModel {
    @JsonProperty('label', String)
    public label: string = null;
}