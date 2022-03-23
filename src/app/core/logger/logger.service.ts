import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MessageService } from '../message/message.service';
import { LogLevelEnum } from './log-level.enum';
import { Logger } from './logger.model';

@Injectable()
export class LoggerService {

  constructor(
    private translate: TranslateService,
    private messageService: MessageService
  ) { }

  public log(logger: Logger): void {
    this.messageService.add({
      severity: this.getSeverity(logger),
      summary: this.getSummary(logger),
      detail: this.getDetail(logger)
    });
  }

  private getDetail(logger: any): string {
    let detail = 'null';
    if (
      logger.message !== undefined &&
      logger.message !== null) {
      detail = logger.message;
    } else if (
      JSON.stringify(logger)['Message'] !== undefined &&
      JSON.stringify(logger)['Message'] !== null) {
      detail = JSON.stringify(logger)['Message'];
    } else {
      const status = this.getStatus(logger);
      if (status !== null) {
        detail = this.translate.instant(`REQUESTS.${status}.COMMENT`);
      }
    }
    return detail;
  }

  private getSeverity(logger: Logger): LogLevelEnum {
    let severity = LogLevelEnum.ERROR;
    const status = this.getStatus(logger);
    if (status !== null) {
      if (status < 200) {
        severity = LogLevelEnum.INFO;
      } else if (status < 300) {
        severity = LogLevelEnum.SUCCESS;
      } else if (status < 400) {
        severity = LogLevelEnum.WARN;
      } else {
        severity = LogLevelEnum.ERROR;
      }
    } else if (
      logger.log !== undefined &&
      logger.log !== null) {
      severity = logger.log;
    }
    return severity;
  }

  private getStatus(logger: Logger): number {
    let status = null;
    if (
      logger.status !== undefined &&
      logger.status !== null) {
      status = logger.status;
    } else if (
      logger.error !== undefined &&
      logger.error !== null &&
      logger.error.status !== undefined &&
      logger.error.status !== null) {
      status = logger.error.status;
    }
    return status;
  }

  private getSummary(logger: Logger): string {
    let summary = 'null';
    const status = this.getStatus(logger);
    if (status !== null) {
      summary = this.translate.instant(`REQUESTS.${status}.STATUS`);
    }
    return summary;
  }

}
