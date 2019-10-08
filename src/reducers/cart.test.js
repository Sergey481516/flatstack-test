import cart from './cart';
import { RESET_CART } from '../constants/cart';

describe('cart reducer tests', () => {
  it('should reset items', () => {
    expect(cart({ items: [{ id: 1 }] }, { type: RESET_CART })).toEqual({
      items: [],
    });
  });
});
