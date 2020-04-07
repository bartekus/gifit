import { put, call, select, takeLatest } from 'redux-saga/effects';

import { SEARCH_GIFS_PENDING, searchGifsSuccess, searchGifsError } from './actions';
import { RootState } from '../../../types';

const getSearchTerm = (state: RootState) => state.searchGifs.term;

export function* searchGifsWorker(services: { ApiService: any }) {
  try {
    const searchTerm = yield select(getSearchTerm);
    const { path, method } = services.ApiService.directory.search();
    const response = yield call(services.ApiService[method], path, { q: searchTerm });

    yield put(searchGifsSuccess(response));
  } catch (err) {
    yield put(searchGifsError(err));
  }
}

// @ts-ignore
export default function* searchGifsSaga(services) {
  yield takeLatest(SEARCH_GIFS_PENDING, searchGifsWorker, services);
}
