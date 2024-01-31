import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './shared/share.module';
import { appReducer } from './storage/app.state';
import { BaseURLInterceptor } from './core/services/base-url.interceptor';
import { CoreModule } from './core/core.module';
import { VideoEffect } from './storage/store-video/video.effect';
import { ApiService } from './youtube/services/api.service';
import { CustomSerializer } from './storage/router.serializer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ShareModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(VideoEffect, ApiService),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseURLInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
