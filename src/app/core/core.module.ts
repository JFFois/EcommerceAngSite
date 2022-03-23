import { NgModule } from '@angular/core';

import { LoggerService } from './logger/logger.service';
import { MessageService } from './message/message.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    MessageService,
    LoggerService
  ]
})

export class CoreModule { }