import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortSearch',
})
export class SortSearchPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cards: SearchItem[], sortValue: string | null): SearchItem[] {
    if (sortValue === '' || !cards || cards.length === 0) {
      return cards;
    }

    cards.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      const viewCountA = a.statistics.viewCount;
      const viewCountB = b.statistics.viewCount;
      if (sortValue === 'sortCounterDateDown') {
        return dateB.getTime() - dateA.getTime();
      } if (sortValue === 'sortCounterDateUp') {
        return dateA.getTime() - dateB.getTime();
      }
      if (sortValue === 'sortCounterViewDown') {
        return Number(viewCountB) - Number(viewCountA);
      } if (sortValue === 'sortCounterViewUp') {
        return Number(viewCountA) - Number(viewCountB);
      }
      return 0;
    });

    return cards;
  }
}


