import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../core/pages/admin/admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

@NgModule({
  declarations: [
    AdminFormComponent,
    AdminComponent,
  ],
  imports: [

    CommonModule,
    AdminRoutingModule,
    ShareModule,
  ],
})
export class AdminModule { }
