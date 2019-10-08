import {
  fetchData,
  setDatasource,
  setFetchLoading,
  setFetchError,
} from './fetch';
import {
  FETCH,
  SET_DATASOURCE,
  SET_FETCH_LOADING,
  SET_FETCH_ERROR,
} from '../constants/fetch';

describe('fetch actions', () => {
  describe('fetchData', () => {
    it('should return right type', () => {
      expect(fetchData({}).type).toBe(FETCH);
    });

    it('should return right payload', () => {
      const payload = {
        id: 'orderForm',
        url: '/order',
        options: {
          method: 'POST',
        },
        mappingOptions: null,
        onSuccess: null,
        onError: null,
      };

      expect(fetchData(payload).payload).toEqual(payload);
    });
  });

  describe('setDatasource', () => {
    it('should return right type', () => {
      expect(setDatasource().type).toBe(SET_DATASOURCE);
    });

    it('shound return right payload', () => {
      expect(setDatasource({ some: 'value' }).payload).toEqual({
        some: 'value',
      });
    });
  });

  describe('setFetchLoading', () => {
    it('should return right type', () => {
      expect(setFetchLoading().type).toBe(SET_FETCH_LOADING);
    });

    it('should return right payload', () => {
      expect(setFetchLoading('orderForm', true).payload).toEqual({
        id: 'orderForm',
        loading: true,
      });
      expect(setFetchLoading('orderForm', false).payload).toEqual({
        id: 'orderForm',
        loading: false,
      });
    });
  });

  describe('setFetchError', () => {
    it('should return right type', () => {
      expect(setFetchError().type).toBe(SET_FETCH_ERROR);
    });

    it('should return right payload', () => {
      expect(
        setFetchError('orderForm', {
          some: 'error',
        }).payload
      ).toEqual({
        id: 'orderForm',
        error: {
          some: 'error',
        },
      });
    });
  });
});
