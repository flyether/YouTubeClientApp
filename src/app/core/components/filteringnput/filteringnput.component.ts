import { Component } from '@angular/core';
import { SearchSignalService } from 'src/app/core/services/search-signal.service';

@Component({
  selector: 'app-filteringnput',
  templateUrl: './filteringnput.component.html',
  styleUrls: ['./filteringnput.component.scss'],
})
export class FilteringnputComponent {
  constructor(public signalService: SearchSignalService) {}

  onClickSortByWord(event: Event) {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      this.signalService.addSearchValue(target.value);
    }
  }
}
