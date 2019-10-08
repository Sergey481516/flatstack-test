import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import { fetchData, setLoading } from './fetchSaga';
import {
  SET_FETCH_LOADING,
  SET_DATASOURCE,
  SET_FETCH_ERROR,
} from '../constants/fetch';

import fetchMock from 'fetch-mock';

fetchMock.get('/order/123/delete', () => ({ some: 'value' }));

describe('fetch saga tests', () => {
  it('should fetch with success', async () => {
    const dispatched = [];
    const fakeStore = {
      getState: () => ({ fetch: {} }),
      dispatch: (action) => dispatched.push(action),
    };

    const onSuccess = sinon.spy();

    await runSaga(fakeStore, fetchData, {
      payload: {
        id: 'orderForm',
        url: '/order/:id/delete',
        options: {
          method: 'GET',
        },
        mappingOptions: {
          id: '123',
        },
        onSuccess,
        onError: null,
      },
    }).toPromise();

    expect(onSuccess.called).toBeTruthy();
    expect(onSuccess.getCall(0).args[0]).toEqual({ some: 'value' });
    expect(dispatched[0].type).toBe(SET_FETCH_LOADING);
    expect(dispatched[0].payload).toEqual({ id: 'orderForm', loading: true });
    expect(dispatched[1].type).toBe(SET_DATASOURCE);
    expect(dispatched[1].payload).toEqual({
      id: 'orderForm',
      datasource: { some: 'value' },
    });
    expect(dispatched[2].type).toBe(SET_FETCH_LOADING);
    expect(dispatched[2].payload).toEqual({ id: 'orderForm', loading: false });
  });

  it('should fetch with error', async () => {
    const dispatched = [];
    const fakeStore = {
      getState: () => ({ fetch: {} }),
      dispatch: (action) => dispatched.push(action),
    };

    const onError = sinon.spy();

    await runSaga(fakeStore, fetchData, {
      payload: {
        id: 'orderForm',
        onSuccess: null,
        onError,
      },
    }).toPromise();

    expect(onError.called).toBeTruthy();
    expect(dispatched[0].type).toBe(SET_FETCH_LOADING);
    expect(dispatched[0].payload).toEqual({ id: 'orderForm', loading: true });
    expect(dispatched[1].type).toBe(SET_FETCH_ERROR);
    expect(dispatched[2].type).toBe(SET_FETCH_LOADING);
    expect(dispatched[2].payload).toEqual({ id: 'orderForm', loading: false });
  });

  it('should return right type and payload', () => {
    const gen = setLoading('orderForm', true);
    const action = gen.next();
    expect(action.value.payload.action.type).toBe(SET_FETCH_LOADING);
    expect(action.value.payload.action.payload).toEqual({
      id: 'orderForm',
      loading: true,
    });
  });
});
