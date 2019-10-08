import {
  SET_DATASOURCE,
  SET_FETCH_LOADING,
  SET_FETCH_ERROR,
} from '../constants/fetch';

/**
 * anyId: {
 *   id: id,
 *   error: error,
 *   loading: loading,
 *   datasource: datasource
 * }
 */
const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_FETCH_ERROR:
      return Object.assign({}, state, {
        [action.payload.id]: {
          ...state[action.payload.id],
          error: action.payload.error,
        },
      });
    case SET_FETCH_LOADING:
      return Object.assign({}, state, {
        [action.payload.id]: {
          ...state[action.payload.id],
          loading: action.payload.loading,
        },
      });
    case SET_DATASOURCE:
      return Object.assign({}, state, {
        [action.payload.id]: {
          ...state[action.payload.id],
          id: action.payload.id,
          datasource: action.payload.datasource,
        },
      });
    default:
      return state;
  }
};
