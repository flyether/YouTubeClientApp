import { generateToken } from 'src/app/core/services/generate-token';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

export const newVideoCreator = (link: string, date: string, title: string, img: string, description = ''): SearchItem => {
  const dateParts = date.split('.');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const dateAt = new Date(year, month, day);
  const newVideo: SearchItem = {
    statistics: {
      viewCount: '0',
      likeCount: '0',
      commentCount: '0',
    },
    link,
    custom: true,
    kind: 'my#video',
    etag: '',
    id: generateToken(),
    snippet: {
      publishedAt: dateAt.toString(),
      channelId: '0',
      title,
      description,
      thumbnails: {
        default: {
          url: '0',
          width: 0,
          height: 0,
        },
        medium: {
          url: img,
          width: 320,
          height: 180,
        },
        high: {
          url: '',
          width: 0,
          height: 0,
        },
      },
      channelTitle: 'Birder King',
      publishTime: new Date().toString(),
    },
  };
  return newVideo;
};
