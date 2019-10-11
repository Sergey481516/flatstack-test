import { takeEvery, call, put } from 'redux-saga/effects';

import { setUserPosition } from '../actions/user';
import { GET_USER_POSITION } from '../constants/user';
import { fetchSaga } from './fetchSaga';
import Api from '../api';
import get from 'lodash.get';

export const geocodeBasePath =
  'response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData';

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
      let country, city, postalCode;

      const data = yield call(
        fetchSaga,
        Api.GET_ADDRESS_BY_GEOCODE,
        {
          method: 'GET',
        },
        {
          coords: `${longitude},${latitude}`,
        }
      );

      if (
        get(data, 'response.GeoObjectCollection.featureMember', []).length > 0
      ) {
        const components = get(data, `${geocodeBasePath}.Address.Components`);
        country = get(
          components.find(({ kind }) => kind === 'country'),
          'name',
          null
        );
        city = get(
          components.find(({ kind }) => kind === 'locality'),
          'name',
          null
        );
        postalCode = get(data, `${geocodeBasePath}.Address.postal_code`);
      }

      yield call(
        setPosition,
        { latitude, longitude },
        country,
        city,
        postalCode
      );
    }
  } catch (e) {
    console.error(e);
  }
}

export function* setPosition(coords, country, city, postalCode) {
  yield put(setUserPosition(coords, country, city, postalCode));
}

export default [takeEvery(GET_USER_POSITION, getPosition)];
