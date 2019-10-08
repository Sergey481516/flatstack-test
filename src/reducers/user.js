import { SET_USER_POSITION } from '../constants/user';

const defaultState = {
  position: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_POSITION:
      return Object.assign({}, state, {
        position: {
          coords: action.payload.coords,
          country: action.payload.country,
          city: action.payload.city,
        },
      });
    default:
      return state;
  }
};
