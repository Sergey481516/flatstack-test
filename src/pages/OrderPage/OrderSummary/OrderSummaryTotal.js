import React from 'react';
import PropTypes from 'prop-types';

function OrderSummaryTotal({ total }) {
  return (
    <div className="order-summary__total">
      <div className="order-summary__total-name">Total</div>
      <div className="order-summary__total-value">${total}</div>
    </div>
  );
}

OrderSummaryTotal.propTypes = {
  total: PropTypes.number,
};

export default OrderSummaryTotal;
