import { put, call, takeLatest } from 'redux-saga/effects';

import { GET_TRENDING_GIFS_PENDING, fetchTrendingGifsSuccess, fetchTrendingGifsError } from './actions';

export function* trendingGifsWorker(services: { ApiService: any }) {
  try {
    const { path, method } = services.ApiService.directory.trending();
    const response = yield call(services.ApiService[method], path);

    yield put(fetchTrendingGifsSuccess(response));
  } catch (err) {
    yield put(fetchTrendingGifsError(err));
  }
}

// @ts-ignore
export default function* trendingGifsSaga(services) {
  yield takeLatest(GET_TRENDING_GIFS_PENDING, trendingGifsWorker, services);
}
