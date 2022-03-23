import { Injectable } from '@angular/core';

import { MessageService as PrimeNgMessageService } from 'primeng/api';

import { Message } from './message.model';


@Injectable({ providedIn: 'root' })
export class MessageService {

  private messages: Message[];

  constructor(
    private primeNgMessageService: PrimeNgMessageService
  ) {
    this.messages = [];
  }

  public add(message: Message) {
    const i = this.messages.findIndex((m) =>
      (m.detail === message.detail &&
        m.severity === message.severity &&
        m.summary === message.summary));
    if (i === -1) {
      this.primeNgMessageService.add({
        severity: message.severity,
        summary: message.summary,
        detail: message.detail
      });
      this.messages.push(message);
    }
  }

  public remove(message: Message) {
    this.messages = this.messages.filter((m) =>
      (m.detail !== message.detail &&
        m.severity !== message.severity &&
        m.summary !== message.summary));
  }

}
