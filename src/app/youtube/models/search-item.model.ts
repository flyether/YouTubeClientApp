interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount?: string;
  commentCount: string;
}

interface Thumbnails {
  default: ThumbnailInfo;
  medium: ThumbnailInfo;
  high: ThumbnailInfo;

}

interface ThumbnailInfo {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}

export interface SearchItem {
  kind: string;
  custom?:string | boolean;
  link?: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
  tags?: string[];
}

export interface SearchItemObj {
  kind: string;
  custom?:string | boolean;
  link?: string;
  etag: string;
  id: {
    videoId: string;
    kind: string;
  }
  snippet: Snippet;
  statistics: Statistics;
  tags?: string[];
}
