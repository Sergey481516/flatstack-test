import fetch from './fetch';
import {
  SET_FETCH_ERROR,
  SET_FETCH_LOADING,
  SET_DATASOURCE,
} from '../constants/fetch';

describe('fetch reducer tests', () => {
  it('should set error', () => {
    expect(
      fetch(
        {},
        {
          type: SET_FETCH_ERROR,
          payload: {
            id: 'orderForm',
            error: 'error',
          },
        }
      )
    ).toEqual({
      orderForm: {
        error: 'error',
      },
    });
  });

  it('should set loading', () => {
    expect(
      fetch(
        {},
        {
          type: SET_FETCH_LOADING,
          payload: {
            id: 'orderForm',
            loading: true,
          },
        }
      )
    ).toEqual({
      orderForm: {
        loading: true,
      },
    });
  });

  it('should set datasource', () => {
    expect(
      fetch(
        {},
        {
          type: SET_DATASOURCE,
          payload: {
            id: 'orderForm',
            datasource: [
              {
                id: 1,
              },
            ],
          },
        }
      )
    ).toEqual({
      orderForm: {
        id: 'orderForm',
        datasource: [
          {
            id: 1,
          },
        ],
      },
    });
  });
});
