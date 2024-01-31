import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { MainPageComponent } from '../core/pages/main-page/main-page.component';
import { DetailPageComponent } from '../core/pages/detailed-page/detailed-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'detailed/:id',
    component: DetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
