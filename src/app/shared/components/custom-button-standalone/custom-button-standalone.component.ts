import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-button-standalone',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './custom-button-standalone.component.html',
  styleUrls: ['./custom-button-standalone.component.scss'],
})
export class CustomButtonStandaloneComponent<T> {
  @Input() link: string;

  @Input() text: string;

  @Input() type = 'button';

  @Input() disabled = false;

  @Output() buttonClick = new EventEmitter<T>();

  handleClick() {
    this.buttonClick.emit();
  }
}

// export default CustomButtonStandaloneComponent;
