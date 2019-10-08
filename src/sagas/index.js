import { all } from 'redux-saga/effects';
import fetchSaga from './fetchSaga';
import userSaga from './userSaga';

const generateSagas = () => {
  return function*() {
    yield all([...fetchSaga, ...userSaga]);
  };
};

export default generateSagas;
