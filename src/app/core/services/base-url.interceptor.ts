/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLConstants } from 'src/app/core/models/constants';

@Injectable()
export class BaseURLInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let baseUrl: string = URLConstants.BASE_URL;
    if (request.url.includes('assets')) {
      baseUrl = 'https://rolling-scopes-school.github.io/flyether-ANGULAR2023Q4/';
    }
    const apiReq = request.clone({
      url: `${baseUrl}${request.url}`,
      params: (request.params ? request.params : new HttpParams()).set(
        'key',
        URLConstants.YOUTUBE_KEY,
      ),
    });
    return next.handle(apiReq);
  }
}
