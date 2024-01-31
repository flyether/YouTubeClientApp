import { Component } from '@angular/core';
import { SearchSignalService } from 'src/app/core/services/search-signal.service';

@Component({
  selector: 'app-filtering-buttons',
  templateUrl: './filtering-buttons.component.html',
  styleUrls: ['./filtering-buttons.component.scss'],
})
class FilteringButtonsComponent {
  private toggleCounterDate = 'sortCounterDateUp';

  private toggleCounterView = 'sortCounterViewUp';

  constructor(public signalService: SearchSignalService) {}

  onClickSortByDate() {
    this.toggleCounterDate = this.toggleCounterDate === 'sortCounterDateDown' ? 'sortCounterDateUp' : 'sortCounterDateDown';
    this.signalService.addSortSignalValue(this.toggleCounterDate);
  }

  onClickSortByCount() {
    this.toggleCounterView = this.toggleCounterView === 'sortCounterViewDown' ? 'sortCounterViewUp' : 'sortCounterViewDown';
    this.signalService.addSortSignalValue(this.toggleCounterView);
  }
}
export default FilteringButtonsComponent;
