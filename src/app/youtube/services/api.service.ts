/* eslint-disable  @typescript-eslint/no-shadow */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  SearchResponse,
  SearchResponseItemIdObj,
} from '../models/search-response.model';
import { URLConstants } from '../../core/models/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private store: Store) {}

  getAllVideoWithoutStatistic(
    question: string,
    pageToken?: string,
    maxResults?: number,
  ): Observable<SearchResponseItemIdObj> {
    let maxResultsIn = '20';
    if (maxResults) {
      maxResultsIn = (20 - maxResults).toString();
    }
    let params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResultsIn)
      .set('q', question);
    if (pageToken) {
      params = params.set('pageToken', pageToken);
    }
    const options = { params };
    return this.http.get<SearchResponseItemIdObj>(
      URLConstants.SEARCH_URL,
      options,
    );
  }

  getAllVideoWithStatistic(id: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet,statistics ')
      .set('id', id);
    const options = { params };
    return this.http.get<SearchResponse>(URLConstants.STATISTIC_URL, options);
  }

  getVideoId(id: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet,statistics ')
      .set('id', id);

    const options = { params };
    return this.http
      .get<SearchResponse>(URLConstants.STATISTIC_URL, options)
      .pipe(catchError(() => EMPTY));
  }
}
