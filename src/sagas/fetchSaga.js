import { call, put, takeEvery } from 'redux-saga/effects';

import Api from '../api';
import pathToRegexp from 'path-to-regexp';

import { FETCH } from '../constants/fetch';
import {
  setDatasource,
  setFetchLoading,
  setFetchError,
} from '../actions/fetch';

export function compileUrl(url, mappingOptions = {}) {
  return pathToRegexp.compile(url)(mappingOptions);
}

export function* fetchData({ payload }) {
  const { id } = payload;

  try {
    const { url, options, mappingOptions, onSuccess } = payload;
    yield setLoading(id, true);
    const datasource = yield call(fetchSaga, url, options, mappingOptions);

    if (id) yield put(setDatasource({ id, datasource }));
    if (typeof onSuccess === 'function') onSuccess(datasource);
  } catch (e) {
    const { onError } = payload;

    if (id) yield put(setFetchError(id, e));
    if (typeof onError === 'function') onError(e);
    console.error(e);
  } finally {
    yield setLoading(id, false);
  }
}

export function* fetchSaga(url, options, mappingOptions = {}) {
  try {
    const datasource = yield call(
      Api.fetch,
      compileUrl(url, mappingOptions),
      options
    );

    return datasource;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export function* setLoading(id, loading) {
  if (id) {
    yield put(setFetchLoading(id, loading));
  }
}

export default [takeEvery(FETCH, fetchData)];
