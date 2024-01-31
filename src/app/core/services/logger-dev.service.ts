/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { LoggerService } from './logger.service';

export class DevLoggerService extends LoggerService {
  logMessage(message: string): void {
    console.log(`[DEV]: ${message}`);
  }
}
