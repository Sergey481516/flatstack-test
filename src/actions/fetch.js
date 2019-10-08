import createActionHelper from './createActionHelper';

import {
  FETCH,
  SET_DATASOURCE,
  SET_FETCH_LOADING,
  SET_FETCH_ERROR,
} from '../constants/fetch';

export const fetchData = (payload) =>
  createActionHelper(FETCH)({
    id: payload.id,
    url: payload.url,
    options: payload.options,
    mappingOptions: payload.mappingOptions,
    onSuccess: payload.onSuccess,
    onError: payload.onError,
  });

export const setDatasource = (payload) =>
  createActionHelper(SET_DATASOURCE)(payload);

export const setFetchLoading = (id, loading) =>
  createActionHelper(SET_FETCH_LOADING)({ id, loading });

export const setFetchError = (id, error) =>
  createActionHelper(SET_FETCH_ERROR)({ id, error });
