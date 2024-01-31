import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from '../core/pages/favorite-page/favorite-page.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [FavoritePageComponent, FavoriteComponent],
  imports: [CommonModule, FavoriteRoutingModule, ShareModule],
})
export class FavoriteModule {}
