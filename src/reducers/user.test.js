import user from './user';
import { SET_USER_POSITION } from '../constants/user';

describe('user reducer tests', () => {
  it('should set position', () => {
    expect(
      user(
        {},
        {
          type: SET_USER_POSITION,
          payload: {
            coords: {
              latitude: '55.11',
              longitude: '11.55',
            },
            country: 'Russia',
            city: 'Kazan',
          },
        }
      )
    ).toEqual({
      position: {
        coords: {
          latitude: '55.11',
          longitude: '11.55',
        },
        country: 'Russia',
        city: 'Kazan',
      },
    });
  });
});
