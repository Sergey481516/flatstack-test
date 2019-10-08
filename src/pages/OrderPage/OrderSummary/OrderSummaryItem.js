import React from 'react';
import PropTypes from 'prop-types';

function OrderSummaryItem({ id, name, img, color, quantity, price, link }) {
  return (
    <li key={id} className="order-summary__item order-summary-item">
      <div className="order-summary-item__img">
        <img src={img} alt="" />
      </div>
      <div className="order-summary-item__info">
        <a className="order-summary-item__name" href={link}>
          {name}
        </a>
        <div className="order-summary-item__color">{color}</div>
        <div className="order-summary-item__quantity">Quantity: {quantity}</div>
      </div>
      <div className="order-summary-item__cost">${price}</div>
    </li>
  );
}

OrderSummaryItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default OrderSummaryItem;
