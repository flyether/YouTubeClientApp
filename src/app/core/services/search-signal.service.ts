import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchSignalService {
  signalSearchValue = signal<string>('');

  sortSignalValue = signal<string >('');

  addSortSignalValue(val: string) {
    this.sortSignalValue.set(val);
  }

  addSearchValue(searchValue: string) {
    this.signalSearchValue.set(searchValue);
  }
}
