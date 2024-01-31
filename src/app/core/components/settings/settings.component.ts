import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Input() settings: boolean;

  @Output() settingsChange = new EventEmitter<boolean>();

  toggleSettings() {
    this.settings = !this.settings;
    this.settingsChange.emit(this.settings);
  }
}
