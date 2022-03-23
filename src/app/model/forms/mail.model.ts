import { JsonObject, JsonProperty } from 'json2typescript';


@JsonObject('Mail')
export class Mail {
    @JsonProperty('genre', String)
    public genre: string = null;

    @JsonProperty('firstName', String)
    public firstName: string = null;

    @JsonProperty('lastName', String)
    public lastName: string = null;

    @JsonProperty('email', String)
    public email: string = null;

    @JsonProperty('phone', String)
    public phone: string = null;

    @JsonProperty('text', String)
    public text: string = null;
}