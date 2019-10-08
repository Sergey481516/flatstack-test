import createActionHelper from './createActionHelper';
import { GET_USER_POSITION, SET_USER_POSITION } from '../constants/user';

export const getUserPosition = () => createActionHelper(GET_USER_POSITION)();
export const setUserPosition = (coords, country, city) =>
  createActionHelper(SET_USER_POSITION)({ coords, country, city });
