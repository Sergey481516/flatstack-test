import createActionHelper from './createActionHelper';

import { RESET_CART } from '../constants/cart';

export const resetCart = () => createActionHelper(RESET_CART)();
