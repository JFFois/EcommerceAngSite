import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseReferenceModel } from './base-reference.model';
import { Metal } from './metal.model';

@JsonObject('FinalProduct')
export class FinalProduct extends BaseReferenceModel {
    @JsonProperty('metal', Metal)
    public metal: Metal = new Metal();

    @JsonProperty('isEngraved', Boolean)
    public isEngraved: boolean = null;

    @JsonProperty('engravingText', String)
    public engravingText: string = null;

    @JsonProperty('engravingFont', String)
    public engravingFont: string = null;
}