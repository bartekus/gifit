import { createAction, createErrorAction } from '../../helpers';

export const SEARCH_GIFS_PENDING = 'SEARCH_GIFS_PENDING';
export const SEARCH_GIFS_SUCCESS = 'SEARCH_GIFS_SUCCESS';
export const SEARCH_GIFS_ERROR = 'SEARCH_GIFS_ERROR';

export const RESET_SEARCH_GIFS = 'RESET_SEARCH_GIFS';

export function searchGifs(payload: any) {
  return createAction(SEARCH_GIFS_PENDING, payload);
}

export function searchGifsSuccess(payload: any) {
  return createAction(SEARCH_GIFS_SUCCESS, payload);
}

export function searchGifsError(error: any) {
  return createErrorAction(SEARCH_GIFS_ERROR, error);
}

export function resetSearchGifs() {
  return createAction(RESET_SEARCH_GIFS);
}
