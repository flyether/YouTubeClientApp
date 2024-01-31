import { Action, createReducer, on } from '@ngrx/store';

import { QueryParam } from 'src/app/core/models/constants';
import { SearchItem } from '../../youtube/models/search-item.model';
import {
  createNewVideoAction,
  deleteVideoById,
  getQueryParam,
  getVideoSuccess,
  setErrorAction,
  toggleFavorite,
} from './video.action';


export interface VideoState {
  videoState: SearchItem[];
  newVideoState: SearchItem[];
  error: string;
  query: QueryParam;
  favoriteVideo: SearchItem[];

}
const initialState: VideoState = {
  videoState: [],
  favoriteVideo: [],
  newVideoState: [],
  error: '',
  query: {
    pageNumber: 1,
    pageToken: '',
    prevPageToken: '',
    pageInfo: 0,
    searchQuestion: '',
    newVideoLength: 0,
  },

};
const reducer = createReducer(
  initialState,
  on(toggleFavorite, (state, { id }) => {
    const isFavorite = state.favoriteVideo.some(
      (item) => item?.id === id,
    );

    if (isFavorite) {
      const updatedFavorite = state.favoriteVideo.filter(
        (item) => item?.id !== id,
      ) as SearchItem[];
      return { ...state, favoriteVideo: updatedFavorite };
    }
    const newFavorite = (state.newVideoState.find(
      (item) => item?.id === id,
    )
        || state.videoState.find(
          (item) => item?.id === id,
        )) as SearchItem;
    return { ...state, favoriteVideo: [...state.favoriteVideo, newFavorite] };
  }),

  on(getQueryParam, (state, { data }) => ({
    ...state,
    query: {
      ...state.query,
      pageNumber:
          data.pageNumber !== undefined ? data.pageNumber : state.query.pageNumber,
      pageToken:
          data.pageToken !== undefined ? data.pageToken : state.query.pageToken,
      prevPageToken:
          data.prevPageToken !== undefined
            ? data.prevPageToken
            : state.query.pageToken,
      pageInfo:
          data.pageInfo !== undefined ? data.pageInfo : state.query.pageInfo,
      searchQuestion:
          data.searchQuestion !== undefined
            ? data.searchQuestion
            : state.query.searchQuestion,
      newVideoLength: state.newVideoState.length,
    },
  })),
  on(getVideoSuccess, (state, { data }) => {
    let updatedVideoState;

    if (state.query.pageNumber === 1) {
      updatedVideoState = [...state.newVideoState, ...data];
    } else {
      updatedVideoState = [...data];
    }

    return {
      ...state,
      videoState: updatedVideoState,
    };
  }),

  on(deleteVideoById, (state, { id }) => {
    const updatedVideoState = state.videoState.filter(
      (item) => item.id !== id,
    );
    const updatedNewVideoState = state.newVideoState.filter(
      (item) => item.id !== id,
    );
    return {
      ...state,
      newVideoState: updatedNewVideoState,
      videoState: updatedVideoState,
    };
  }),
  on(createNewVideoAction, (state, { data }) => ({
    ...state,
    newVideoState: [data, ...state.newVideoState],
    videoState: [data, ...state.videoState],
  })),
  on(setErrorAction, (state, { data }) => ({
    ...state,
    error: data,
  })),
);
export function videoStateReducer(
  state: VideoState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
