import React from 'react';
import PropTypes from 'prop-types';

import OrderSummaryItem from './OrderSummaryItem';

function OrderSummaryList({ items }) {
  return (
    <ul className="order-summary__list">
      {items.map((item) => (
        <OrderSummaryItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

OrderSummaryList.propTypes = {
  items: PropTypes.array,
};

OrderSummaryList.defaultProps = {
  items: [],
};

export default OrderSummaryList;
