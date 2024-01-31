
import { mock } from '../components/search-item/mockAppState';
import { SearchItem } from '../models/search-item.model';
import { SortSearchPipe } from './sort-search.pipe';

const mockItem = mock
const mockItem1 = mockItem 
const mockItem2 = mockItem 
mockItem1.snippet.publishedAt ='2023-11-20'
mockItem2.snippet.publishedAt ='2023-11-21'
describe('SortSearchPipe', () => {
  let pipe: SortSearchPipe;

  beforeEach(() => {
    pipe = new SortSearchPipe();
  });

  it('should return the input array when sortValue is empty', () => {
    const input: SearchItem[] = [mockItem1, mockItem2];
    const result = pipe.transform(input, '');
    expect(result).toEqual(input);
  });

  it('should sort by date in descending order when sortValue is "sortCounterDateDown"', () => {
      const input: SearchItem[] = [mockItem1, mockItem2];
    const result = pipe.transform(input, 'sortCounterDateDown');
    expect(result).toEqual([mockItem1, mockItem2]);
  });

});