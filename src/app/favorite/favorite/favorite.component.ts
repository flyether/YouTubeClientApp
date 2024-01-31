import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchSignalService } from 'src/app/core/services/search-signal.service';
import { GivMeFavoriteVideo } from 'src/app/storage/store-video/video.selector';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  favoritesVideo$: Observable<SearchItem[]> = this.store$.select(GivMeFavoriteVideo);

  constructor(private store$: Store, public signalValue: SearchSignalService) {}
}
