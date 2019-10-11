import { createSelector } from 'reselect';

export const userSelector = (state) => state.user;

export const getUserPositionSelector = () =>
  createSelector(
    userSelector,
    (user) => user.position || {}
  );
