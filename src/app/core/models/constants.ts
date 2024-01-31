export enum URLConstants {
  SEARCH_URL = 'search',
  STATISTIC_URL = 'videos',
  BASE_URL = 'https://www.googleapis.com/youtube/v3/',
  LOGIN = 'login',
  LOGGER = 'logger-test',
  REG = 'register',
  ADMIN = 'admin',
  FAVORITE = 'favorite',
  YOUTUBE_KEY = 'AIzaSyACBLGDLGgvNpN-oJbgG745V7q8qkOPDQw',
}

// 'AIzaSyBf1Ki_Xpqux3b-K9e2l1P6jeEQZxcb0p4'
// "AIzaSyACBLGDLGgvNpN-oJbgG745V7q8qkOPDQw"
// AIzaSyBulnRrs9HyOJ0-2zgf-CUhqy48PbPJf5g
export interface QueryParam {
  pageToken?: string;
  pageInfo?: number;
  prevPageToken?: string;
  searchQuestion?: string;
  newVideoLength?: number;
  pageNumber?: number;
}
