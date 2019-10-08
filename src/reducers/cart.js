import { RESET_CART } from '../constants/cart';

const defaultState = {
  items: [
    {
      id: 1,
      img: '/public/img/boot.png',
      link: '#',
      name: 'The Chelsea Boot',
      color: 'Black',
      quantity: 1,
      price: 235,
    },
    {
      id: 2,
      img: '/public/img/bag.png',
      link: '#',
      name: 'The Twill Snap Backpack',
      color: 'Reverse Denim + Drown leather',
      quantity: 1,
      price: 65,
    },
    {
      id: 3,
      img: '/public/img/zip-bag.png',
      link: '#',
      name: 'The Twill Zip Tote',
      color: 'Reverse Denim + Drown leather',
      quantity: 1,
      price: 48,
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESET_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
