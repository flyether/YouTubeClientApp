import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailPageComponent } from '../core/pages/detailed-page/detailed-page.component';
import { MainPageComponent } from '../core/pages/main-page/main-page.component';
import { ShareModule } from '../shared/share.module';
import { DetailedComponent } from './components/detailed/detailed.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BackgroundImgDirective } from './directives/background-img.directive';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    DetailPageComponent,
    MainPageComponent,
    SearchResultsComponent,
    DetailedComponent,
    BackgroundImgDirective,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    ShareModule,
  ],
  exports: [],
})
export class YoutubeModule {}
