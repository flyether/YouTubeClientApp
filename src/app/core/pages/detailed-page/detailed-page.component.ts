import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GivMeVideoById } from 'src/app/storage/store-video/video.selector';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailPageComponent {
  cards$: Observable<SearchItem | undefined> = this.store$.select(GivMeVideoById);

  constructor(private store$: Store) {}
}
