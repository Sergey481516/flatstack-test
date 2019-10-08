import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
import cartReducer from './cart';
import fetch from './fetch';

export default combineReducers({
  form: formReducer,
  user: userReducer,
  cart: cartReducer,
  fetch: fetch,
});
