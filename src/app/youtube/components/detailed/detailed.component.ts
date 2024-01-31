import { Component, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent {
  @Input() card: SearchItem;
}
