import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/youtube/services/api.service';
import {
  catchError, map, mergeMap, of,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { QueryParam } from 'src/app/core/models/constants';
import {
  getQueryParam,
  getVideo,
  getVideoSuccess,

} from './video.action';
import { setErrorMassage } from './set-error';

@Injectable({
  providedIn: 'root',
})
export class VideoEffect {
  loadVideos$ = createEffect(() => this.actions$.pipe(
    ofType(getVideo),
    mergeMap((action) => this.servesSearch.getAllVideoWithoutStatistic(
      action.data,
      action.pageToken,
      action.maxResults,
    )),
    mergeMap((res) => {
      const updatedQueryParams: QueryParam = {
        pageToken: res.nextPageToken,
        pageInfo: res.pageInfo.totalResults,
        prevPageToken: res.prevPageToken,
      };
      this.store.dispatch(getQueryParam({ data: updatedQueryParams }));
      let idArr = '';
      res.items.forEach((item) => {
        idArr += `${item.id.videoId},`;
      });
      return this.servesSearch.getAllVideoWithStatistic(idArr).pipe(
        catchError((error) => {
          setErrorMassage(error);
          return of({ items: [] });
        }),
      );
    }),
    map((video) => getVideoSuccess({ data: video.items })),
  ));

  constructor(
    private actions$: Actions,
    private servesSearch: ApiService,
    private store: Store,
  ) {}
}
