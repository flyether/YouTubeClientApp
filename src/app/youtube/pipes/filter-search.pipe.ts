import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform = (cards: SearchItem[], search: string): SearchItem[] => {
    if (search === 'What are you want to find out?') return cards;
    return cards.filter((card) => card.snippet.title.toLowerCase().includes(search.toLowerCase()));
  };
}
