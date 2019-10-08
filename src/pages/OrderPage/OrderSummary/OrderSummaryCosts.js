import React from 'react';
import PropTypes from 'prop-types';

function OrderSummaryCosts({ subTotal, taxes, shipping }) {
  return (
    <div className="order-summary__costs order-summary-costs">
      <ul className="order-summary-costs__list">
        <li className="order-summary-costs__item">
          <div className="order-summary-costs__name">Subtotal</div>
          <div className="order-summary-costs__value">${subTotal}</div>
        </li>
        <li className="order-summary-costs__item">
          <div className="order-summary-costs__name">Shipping</div>
          <div className="order-summary-costs__value">{shipping}</div>
        </li>
        <li className="order-summary-costs__item">
          <div className="order-summary-costs__name">Taxes</div>
          <div className="order-summary-costs__value">${taxes}</div>
        </li>
      </ul>
    </div>
  );
}

OrderSummaryCosts.propTypes = {
  subTotal: PropTypes.number,
  taxes: PropTypes.number,
  shipping: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default OrderSummaryCosts;
