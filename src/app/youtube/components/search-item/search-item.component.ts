import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deleteVideoById,
  toggleFavorite,
} from '../../../storage/store-video/video.action';
import { Observable, combineLatest, map } from 'rxjs';
import { GivMeFavoriteVideo } from '../../../storage/store-video/video.selector';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() card: SearchItem;

  favoritesVideo$: Observable<SearchItem[]> = this.store$.select(GivMeFavoriteVideo);

  isFavorite$: Observable<boolean>;

  handleDelete(id: string) {
    this.store$.dispatch(deleteVideoById({ id }));
  }

  addFavorite(id: string) {
    this.store$.dispatch(toggleFavorite({ id }));
  }

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.isFavorite$ = combineLatest([
      this.favoritesVideo$,
      this.store$.select(GivMeFavoriteVideo),
    ]).pipe(
      map(([allFavorites]) => allFavorites.some((fav) => fav.id === this.card.id)),
    );
  }
}
