import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../../core/logger/logger.service';
import { Logger } from '../../../core/logger/logger.model';
import { LogLevelEnum } from '../../../core/logger/log-level.enum';

@Component({
    selector: 'bp-home-page',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(
        private logger: LoggerService
    ) { }

    public ngOnInit(): void {
        this.logger.log({log: LogLevelEnum.INFO});
    }
}