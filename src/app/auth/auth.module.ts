import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ShareModule } from '../shared/share.module';
import { LoginPageComponent } from '../core/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    FormLoginComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    AuthRoutingModule,
  ],
  exports: [],
})
export class AuthModule { }
