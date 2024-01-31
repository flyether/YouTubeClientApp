import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import FilteringButtonsComponent from 'src/app/core/components/filtering-buttons/filtering-buttons.component';
import FilteringComponent from 'src/app/core/components/filtering/filtering.component';
import { FilteringnputComponent } from 'src/app/core/components/filteringnput/filteringnput.component';
import { LoginInfoComponent } from 'src/app/core/components/login-info/login-info.component';
import { LogoComponent } from 'src/app/core/components/logo/logo.component';
import { SearchComponent } from 'src/app/core/components/search/search.component';
import { SettingsComponent } from 'src/app/core/components/settings/settings.component';

import { ErrorPageComponent } from 'src/app/core/pages/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../shared/share.module';
import { LoggerService } from './services/logger.service';
import { DevLoggerService } from './services/logger-dev.service';
import { ProdLoggerService } from './services/logger-prod.service';
import { LoggerTestComponent } from './components/logger-test/logger-test.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    SettingsComponent,
    LoginInfoComponent,
    FilteringComponent,
    FilteringButtonsComponent,
    FilteringnputComponent,
    LoggerTestComponent,
  ],
  imports: [CommonModule, RouterModule, ShareModule],
  exports: [
    ErrorPageComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    SettingsComponent,
    LoginInfoComponent,
    FilteringComponent,
    FilteringButtonsComponent,
    FilteringnputComponent,
  ],
  providers: [
    {
      provide: LoggerService,
      useClass: isDevMode() ? DevLoggerService : ProdLoggerService,
    },
  ],
})
export class CoreModule {}
