import { SearchSignalService } from './search-signal.service';

describe('SearchSignalService', () => {
  let service: SearchSignalService;

  beforeEach(() => {
    service = new SearchSignalService();
  });

  it('should set sortSignalValue with the provided value', () => {
    const sortValue = 'date';
    service.addSortSignalValue(sortValue);
    expect(service.sortSignalValue()).toBe(sortValue);
  });

  it('should set signalSearchValue with the provided search value', () => {
    const searchValue = 'example';
    service.addSearchValue(searchValue);
    expect(service.signalSearchValue()).toBe(searchValue);
  });
});