import { createAction, props } from '@ngrx/store';
import { QueryParam } from '../..//core/models/constants';
import { SearchItem } from '../../youtube/models/search-item.model';
import { ErrorFromServer } from './set-error';

export const getVideo = createAction('GET_VIDEO', props<{ data: string, pageToken?: string, maxResults?: number }>());
export const getVideoWithStatistics = createAction('GET_STATISTIC', props<{ id: string }>());

export const deleteVideoById = createAction('DELETE_VIDEO', props<{ id: string }>());

export const toggleFavorite = createAction('TOGGLE_FAVORITE', props<{ id: string }>());

export const getVideoSuccess = createAction('GET_VIDEO_SUCCESS', props<{ data: SearchItem[] }>());

export const getQueryParam = createAction('GET_PAGE_TOKEN', props<{ data: QueryParam }>());

export const createNewVideoAction = createAction('CREATE_VIDEO', props<{ data: SearchItem }>());
export const getFailedVideo = createAction('GET_FAILED_VIDEO', props<{ data: ErrorFromServer }>());
export const setErrorAction = createAction('SET_ERROR', props<{ data: string }>());
