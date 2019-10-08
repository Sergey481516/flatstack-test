import { getUserPosition, setUserPosition } from './user';
import { GET_USER_POSITION, SET_USER_POSITION } from '../constants/user';

describe('user actions', () => {
  describe('getUserPosition', () => {
    it('should return right type', () => {
      expect(getUserPosition().type).toBe(GET_USER_POSITION);
    });
  });

  describe('setUserPosition', () => {
    it('should return right type', () => {
      expect(setUserPosition().type).toBe(SET_USER_POSITION);
    });

    it('should return right payload', () => {
      expect(
        setUserPosition(
          { latitude: '55.11', longitude: '55.44' },
          'Russia',
          'Kazan'
        ).payload
      ).toEqual({
        coords: { latitude: '55.11', longitude: '55.44' },
        country: 'Russia',
        city: 'Kazan',
      });
    });
  });
});
