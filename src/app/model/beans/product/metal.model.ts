import { JsonObject, JsonProperty } from 'json2typescript';

import { Picture } from '../picture/picture.model';
import { BaseReferenceModel } from './base-reference.model';

@JsonObject('Metal')
export class Metal extends BaseReferenceModel {
    @JsonProperty('picture', Picture)
    public picture: Picture = new Picture();

    @JsonProperty('availability', Number)
    public availability: number = null;
}