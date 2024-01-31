import { SearchItem } from "../../models/search-item.model"


export const mock: SearchItem = {
   statistics: {
     viewCount: '0',
     likeCount: '0',
     commentCount: '0',
   },
   link: 'dsg',
   custom: true,
   kind: 'my#video',
   etag: '',
   id: 'generateToken()',
   snippet: {
     publishedAt: new Date().toString(),
     channelId: '0',
     title : 'vjr',
     description: "description",
     thumbnails: {
       default: {
         url: '0',
         width: 0,
         height: 0,
       },
       medium: {
         url: "img",
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
}

export const mockAppState = {
   videoState: [mock],
   favoriteVideo: [mock],
   newVideoState: [mock],
   error: 'error',
   query: {
     pageNumber: 2,
     pageToken: 'ss',
     prevPageToken: 'ss',
     pageInfo: 0,
     searchQuestion: 'cat',
     newVideoLength: 0,
   },
}

