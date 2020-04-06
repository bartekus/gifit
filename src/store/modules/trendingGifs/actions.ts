import { createAction, createErrorAction } from '../../helpers';

export const GET_TRENDING_GIFS_PENDING = 'GET_TRENDING_GIFS_PENDING';
export const GET_TRENDING_GIFS_SUCCESS = 'GET_TRENDING_GIFS_SUCCESS';
export const GET_TRENDING_GIFS_ERROR = 'GET_TRENDING_GIFS_ERROR';

export function fetchTrendingGifs() {
  return createAction(GET_TRENDING_GIFS_PENDING);
}

export function fetchTrendingGifsSuccess(payload: any) {
  return createAction(GET_TRENDING_GIFS_SUCCESS, payload);
}

export function fetchTrendingGifsError(error: any) {
  return createErrorAction(GET_TRENDING_GIFS_ERROR, error);
}
