import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('BaseModel')
export abstract class BaseModel {
    // @JsonProperty('uuid', String)
    // public uuid: string = null;

    @JsonProperty('id', Number)
    public id: number = null;
}