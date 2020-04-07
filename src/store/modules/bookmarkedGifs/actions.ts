import { createAction } from '../../helpers';

export const SET_BOOKMARKED_GIFS = 'SET_BOOKMARKED_GIFS';

export function setBookmarkedGifs(payload: any) {
  return createAction(SET_BOOKMARKED_GIFS, payload);
}
