import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import cart from '../../assets/img/cart.svg';

function CartBox({ numberOfGoods }) {
  return (
    <Link to="/order" className="header__cart-box cart-box">
      {!!numberOfGoods && <div className="cart-box__text">cart</div>}
      <div className="cart-box__cart">
        <div className="cart-box__goods">
          {!!numberOfGoods && numberOfGoods}
        </div>
        <img src={cart} alt="cart-box" width="21" height="16" />
      </div>
    </Link>
  );
}

CartBox.propTypes = {
  numberOfGoods: PropTypes.number,
};

export default CartBox;
