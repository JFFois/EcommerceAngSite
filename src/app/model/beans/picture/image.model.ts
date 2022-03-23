import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseModel } from '../../../core/model/beans/base.model';

@JsonObject('Image')
export class Image extends BaseModel {
    @JsonProperty('name', String)
    public name: string = null;

    @JsonProperty('url', String)
    public url: string = null;
}