import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { VideoState, videoStateReducer } from './store-video/video.reducer';

export interface AppState {
  videoState: VideoState;
  router: RouterReducerState;
}

export const appReducer = {
  VideoOOO: videoStateReducer,
  router: routerReducer,
};
