import { call, put, takeEvery } from 'redux-saga/effects';

import Api from '../api';
import pathToRegexp from 'path-to-regexp';

import { FETCH } from '../constants/fetch';
import {
  setDatasource,
  setFetchLoading,
  setFetchError,
} from '../actions/fetch';

function compileUrl(url, mappingOptions = {}) {
  return pathToRegexp.compile(url)(mappingOptions);
}

export function* fetchData({ payload }) {
  const { id } = payload;

  try {
    const { url, options, mappingOptions, onSuccess } = payload;
    yield setLoading(id, true);
    const datasource = yield call(
      Api.fetch,
      compileUrl(url, mappingOptions),
      options
    );
    yield put(setDatasource({ id, datasource }));
    if (typeof onSuccess === 'function') onSuccess(datasource);
  } catch (e) {
    const { onError } = payload;

    yield put(setFetchError(id, e));
    if (typeof onError === 'function') onError(e);
    console.error(e);
  } finally {
    yield setLoading(id, false);
  }
}

export function* setLoading(id, loading) {
  yield put(setFetchLoading(id, loading));
}

export default [takeEvery(FETCH, fetchData)];
