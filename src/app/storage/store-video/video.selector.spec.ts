import { VideoState } from './video.reducer';
import { RouterStateUrl } from '../router.serializer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { mock, mockAppState } from '../../youtube/components/search-item/mockAppState';
import { Params, RouterStateSnapshot } from '@angular/router';
import { GivMeFavoriteVideo, GivMeNeWVideoLength, videoSelector } from './video.selector';
describe('Video Selectors', () => {

  const initialState = mockAppState 

  it('should select the video state', () => {
    const selected = videoSelector.projector(initialState);
    expect(selected).toBe(initialState);
  });

  it('should select the favorite videos', () => {
    const favoriteVideos = [mock];
    const selected = GivMeFavoriteVideo.projector(initialState);
    expect(selected).toEqual(favoriteVideos);
  });

  it('should select the length of new videos', () => {
    const newVideoLength = 1
    const selected = GivMeNeWVideoLength.projector(initialState);
    expect(selected).toBe(newVideoLength);
  });

});