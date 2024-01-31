import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { loginGuard } from './core/guards/login.guard';
import { LoggerTestComponent } from './core/components/logger-test/logger-test.component';
import { URLConstants } from './core/models/constants';

const routes: Routes = [
  {
    path: '',
    canActivate: [loginGuard],
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: URLConstants.LOGIN,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: URLConstants.ADMIN,
    canActivate: [loginGuard],
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: URLConstants.FAVORITE,
    canActivate: [loginGuard],
    loadChildren: () => import('./favorite/favorite.module').then((m) => m.FavoriteModule),
  },
  {
    path: URLConstants.LOGGER,
    canActivate: [loginGuard],
    component: LoggerTestComponent,
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
