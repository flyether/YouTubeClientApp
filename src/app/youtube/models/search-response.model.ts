import { SearchItem, SearchItemObj } from './search-item.model';

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  nextPageToken: string;
  prevPageToken?: string;
  items: SearchItem[];
}

export interface SearchResponseItemIdObj {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  nextPageToken: string;
  prevPageToken?: string;
  items: SearchItemObj[];
}
