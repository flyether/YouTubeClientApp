import { createAction, props } from '@ngrx/store';
import { QueryParam } from '../..//core/models/constants';
import { SearchItem } from '../../youtube/models/search-item.model';
import { ErrorFromServer } from './set-error';
import { deleteVideoById, getVideo, getVideoWithStatistics } from './video.action';

describe('Video Actions', () => {
  it('should create an action to get video', () => {
    const expectedAction = createAction('GET_VIDEO', props<{ data: string, pageToken?: string, maxResults?: number }>());
    const action = getVideo({ data: 'example' });
    expect(action).toEqual(expectedAction({ data: 'example' }));
  });

  it('should create an action to get video with statistics', () => {
    const expectedAction = createAction('GET_STATISTIC', props<{ id: string }>());
    const action = getVideoWithStatistics({ id: 'exampleId' });
    expect(action).toEqual(expectedAction({ id: 'exampleId' }));
  });

  it('should create an action to delete video by id', () => {
    const expectedAction = createAction('DELETE_VIDEO', props<{ id: string }>());
    const action = deleteVideoById({ id: 'exampleId' });
    expect(action).toEqual(expectedAction({ id: 'exampleId' }));
  });
});