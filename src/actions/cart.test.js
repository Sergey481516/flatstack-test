import { resetCart } from './cart';
import { RESET_CART } from '../constants/cart';

describe('cart actions', () => {
  describe('resetCart', () => {
    it('should return right type', () => {
      expect(resetCart().type).toBe(RESET_CART);
    });
  });
});
