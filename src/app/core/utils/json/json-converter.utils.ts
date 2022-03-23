import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';

export class CustomJsonConvert extends JsonConvert {
  constructor() {
    super();
    this.ignorePrimitiveChecks = false;
    this.operationMode = OperationMode.ENABLE;
    this.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
  }
}