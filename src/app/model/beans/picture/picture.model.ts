import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseModel } from '../../../core/model/beans/base.model';
import { Image } from './image.model';

@JsonObject('Picture')
export class Picture extends BaseModel {
    @JsonProperty('image', Image)
    public image: Image = new Image();
}