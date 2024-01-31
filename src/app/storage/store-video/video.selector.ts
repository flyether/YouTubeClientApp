import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { VideoState } from './video.reducer';
import { RouterStateUrl } from '../router.serializer';

export const videoSelector = createFeatureSelector<VideoState>('VideoOOO');
export const selectReducerStateRouter = createFeatureSelector<
RouterReducerState<RouterStateUrl>
>('router');
export const GivMeVideo = createSelector(
  videoSelector,
  (state) => state.videoState,
);
export const GivMeFavoriteVideo = createSelector(
  videoSelector,
  (state) => state.favoriteVideo,
);
export const GivMeNeWVideoLength = createSelector(
  videoSelector,
  (state) => state.newVideoState.length,
);

export const GivMeQueryParam = createSelector(
  videoSelector,
  (state) => state.query,
);

export const getRouterURL = createSelector(
  selectReducerStateRouter,
  (rout) => rout.state.url,
);

export const GivMeVideoById = createSelector(
  videoSelector,
  selectReducerStateRouter,
  (state, rout) => state.videoState.find((e) => e.id === rout.state.params.id),
);
