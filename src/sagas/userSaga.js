import { takeEvery, call, put } from 'redux-saga/effects';

import { setUserPosition } from '../actions/user';
import { GET_USER_POSITION } from '../constants/user';

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function* getPosition() {
  try {
    if (navigator.geolocation) {
      const { coords } = yield call(getCurrentPosition);
      const { latitude, longitude } = coords;

      yield call(setPosition, { latitude, longitude }, 'Russin', 'Kazan');
    }
  } catch (e) {
    console.error(e);
  }
}

export function* setPosition(coords, country, city) {
  yield put(setUserPosition(coords, country, city));
}

export default [takeEvery(GET_USER_POSITION, getPosition)];
