import { videoStateReducer } from './video.reducer';
import * as VideoActions from './video.action';
import { mock, mockAppState } from '../../youtube/components/search-item/mockAppState';

describe('Video Reducer', () => {
   const initialState = mockAppState 
   const videoData = mock;
  it('should toggle favorite correctly', () => {
    const id = 'generateToken()'; 
    const action = VideoActions.toggleFavorite({ id });
    const state = videoStateReducer(initialState, action);
  });

  it('should update query parameters correctly', () => {
   const newQueryParams = { pageNumber: 2, pageToken: 'token' };
   const action = VideoActions.getQueryParam({ data: newQueryParams });
   const state = videoStateReducer(initialState, action);
  
   expect(state.query.pageNumber).toBe(2);
   expect(state.query.pageToken).toBe('token');
 });

 it('should handle get video success correctly', () => {
   const action = VideoActions.getVideoSuccess({ data:[videoData]  });
   const state = videoStateReducer(initialState, action);
   expect(state.videoState).toEqual([videoData]);
 });

 it('should toggle video favorite status correctly', () => {
   const action = VideoActions.toggleFavorite({ id: 'video1' });
   const state = videoStateReducer(initialState, action);
 });

 it('should update query parameters correctly', () => {
   const queryParams = { pageNumber: 2, pageToken: 'token' };
   const action = VideoActions.getQueryParam({ data: queryParams });
   const state = videoStateReducer(initialState, action);
 });

 it('should delete video by ID', () => {
   const action = VideoActions.deleteVideoById({ id: 'video1' });
   const state = videoStateReducer(initialState, action);
 });

it('should create a new video', () => {
   const newVideoData = videoData;
   const action = VideoActions.createNewVideoAction({ data: newVideoData });
   const state = videoStateReducer(initialState, action);
 });
 
 it('should set error message', () => {
   const errorMessage = 'An error occurred';
   const action = VideoActions.setErrorAction({ data: errorMessage });
   const state = videoStateReducer(initialState, action);
 });

 it('should return the default state if the action is invalid', () => {
   const action = { type: 'INVALID_ACTION' };
   const state = videoStateReducer(initialState, action);
 });
 
 it('should return the same state if the action does not lead to state changes', () => {
   const action = { type: 'NO_CHANGE_ACTION' };
   const state = videoStateReducer(initialState, action);
 });
 
});