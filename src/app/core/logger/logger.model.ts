import { LogLevelEnum } from './log-level.enum';

export class Logger {
  public log?: LogLevelEnum;
  public error?: Response;
  public message?: string;
  public status?: number;
}
