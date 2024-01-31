import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Observable,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { SearchSignalService } from 'src/app/core/services/search-signal.service';
import {
  getQueryParam,
  getVideo,
} from 'src/app/storage/store-video/video.action';
import { FormControl, FormGroup } from '@angular/forms';
import { GivMeNeWVideoLength } from 'src/app/storage/store-video/video.selector';
import { QueryParam } from '../../models/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy, OnInit {
  private subscription: Subscription[] = [];

  length$: Observable<number> = this.store$.select(GivMeNeWVideoLength);

  maxResult = 0;

  myReactForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  ngOnInit(): void {
    this.subscription.push(
      this.length$.subscribe((length) => {
        if (length > 0) this.maxResult = length;
      }),
    );

    this.subscription.push(
      this.myReactForm.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((value) => {
          if (value.search.length > 2) {
            const updatedQueryParams: QueryParam = {
              searchQuestion: value.search,
            };
            this.store$.dispatch(getQueryParam({ data: updatedQueryParams }));
            this.store$.dispatch(
              getVideo({ data: value.search, maxResults: this.maxResult }),
            );
          }
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((e) => e.unsubscribe());
  }

  constructor(
    public signalService: SearchSignalService,
    private store$: Store,
  ) {}
}
