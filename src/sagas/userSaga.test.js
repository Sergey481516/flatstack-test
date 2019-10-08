import { setPosition } from './userSaga';

import { SET_USER_POSITION } from '../constants/user';

describe('user saga tests', () => {
  it('should set position', () => {
    const gen = setPosition(
      { latitude: '55.11', longitude: '55.55' },
      'Russia',
      'Kazan'
    );

    const action = gen.next();
    expect(action.value.payload.action.type).toBe(SET_USER_POSITION);
    expect(action.value.payload.action.payload).toEqual({
      coords: {
        latitude: '55.11',
        longitude: '55.55',
      },
      country: 'Russia',
      city: 'Kazan',
    });
  });
});
