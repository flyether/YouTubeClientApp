/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { LoggerService } from './logger.service';

export class ProdLoggerService extends LoggerService {
  logMessage(message: string): void {
    console.log(`[PROD]: ${message}`);
  }
}
