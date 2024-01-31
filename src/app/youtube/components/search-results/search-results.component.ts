import { Observable, Subscription, take } from 'rxjs';
import { SearchSignalService } from 'src/app/core/services/search-signal.service';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getQueryParam,
  getVideo,
} from 'src/app/storage/store-video/video.action';
import { QueryParam } from 'src/app/core/models/constants';
import { SearchItem } from '../../models/search-item.model';
import {
  GivMeNeWVideoLength,
  GivMeQueryParam,
  GivMeVideo,
} from '../../../storage/store-video/video.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnDestroy {
  currentPage = 0;

  cards$: Observable<SearchItem[]> = this.store$.select(GivMeVideo);

  queryParam$: Observable<QueryParam> = this.store$.select(GivMeQueryParam);

  length$: Observable<number> = this.store$.select(GivMeNeWVideoLength);

  private subscription: Subscription[] = [];

  onClickNext() {
    this.subscription.push(
      this.queryParam$.pipe(take(1)).subscribe((query) => {
        let searchQuestion = '';
        if (query.pageNumber) {
          const QueryNumberPage: QueryParam = {
            pageNumber: query.pageNumber + 1,
          };
          this.store$.dispatch(getQueryParam({ data: QueryNumberPage }));
        }

        if (query.searchQuestion) searchQuestion = query.searchQuestion;
        this.store$.dispatch(
          getVideo({
            data: searchQuestion,
            pageToken: query.pageToken,
          }),
        );
      }),
    );
  }

  onClickPrev() {
    this.subscription.push(
      this.queryParam$.pipe(take(1)).subscribe((query) => {
        let maxResults = 0;
        if (query.newVideoLength && query.pageNumber === 2) {
          maxResults = query.newVideoLength;
        }
        if (query.pageNumber && query.pageNumber > 1) {
          const QueryNumberPage: QueryParam = {
            pageNumber: query.pageNumber - 1,
          };
          this.store$.dispatch(getQueryParam({ data: QueryNumberPage }));
        }
        let searchQuestion = '';
        if (query.searchQuestion) searchQuestion = query.searchQuestion;
        this.store$.dispatch(
          getVideo({
            data: searchQuestion,
            pageToken: query.prevPageToken,
            maxResults,
          }),
        );
      }),
    );
  }

  constructor(private store$: Store, public signalValue: SearchSignalService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.forEach((e) => e.unsubscribe());
  }
}
