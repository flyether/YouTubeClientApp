import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-logger-test',
  templateUrl: './logger-test.component.html',
  styleUrls: ['./logger-test.component.scss'],
})
export class LoggerTestComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.logMessage('Testing logger service');
  }
}
