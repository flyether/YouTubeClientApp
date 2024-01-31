import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomButtonStandaloneComponent } from 'src/app/shared/components/custom-button-standalone/custom-button-standalone.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchItemComponent } from '../youtube/components/search-item/search-item.component';
import { FilterSearchPipe } from '../youtube/pipes/filter-search.pipe';
import { SortSearchPipe } from '../youtube/pipes/sort-search.pipe';
import { TruncatePipe } from '../youtube/pipes/truncate.pipe';
import { BorderColorDirective } from '../youtube/directives/border-color.directive';

@NgModule({
  declarations: [SearchItemComponent, SortSearchPipe, BorderColorDirective,
    FilterSearchPipe,
    TruncatePipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    CustomButtonStandaloneComponent,
    CommonModule,
    RouterModule,
  ],
  exports: [
    BorderColorDirective,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CustomButtonStandaloneComponent,
    SearchItemComponent,
    SortSearchPipe,
    FilterSearchPipe,
    TruncatePipe,
  ],
})
export class ShareModule {}
