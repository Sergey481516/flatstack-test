import { createSelector } from 'reselect';

export const cartSelector = (state) => state.cart;

export const getCartItemsSelector = () =>
  createSelector(
    cartSelector,
    (cart) => cart.items || []
  );

export const getCartItemsCountSelector = () =>
  createSelector(
    cartSelector,
    (cart) => (Array.isArray(cart.items) ? cart.items.length : 0)
  );
