import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItemsCountSelector } from '../../selectors/cart';

import Brand from './Brand';
import CartBox from './CartBox';

function Header() {
  const numberOfGoods = useSelector(getCartItemsCountSelector());

  return (
    <div className="header__container">
      <header className="header">
        <Brand />
        <CartBox numberOfGoods={numberOfGoods} />
      </header>
    </div>
  );
}

export default Header;
