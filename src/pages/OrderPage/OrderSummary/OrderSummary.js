import React, { useState } from 'react';

import Title from '../../../components/Title';
import OrderSummaryList from './OrderSummaryList';
import OrderSummaryCosts from './OrderSummaryCosts';
import OrderSummaryTotal from './OrderSummaryTotal';
import TermsAndConditions from '../../../components/TermsAndConditions';

const TAXES = 12.12;
const SHIPPING = 'Free';

function OrderSummary({ cartItems }) {
  const [items] = useState(cartItems);

  const subTotal = items.reduce((acc, { price }) => {
    return acc + price;
  }, 0);
  const total = subTotal + TAXES;

  return (
    <div className="order-summary">
      <Title
        className="order-summary__title"
        level={3}
        subTitle={
          <a href="#" className="order-summary__edit-link">
            edit order
          </a>
        }
      >
        Order Summary
      </Title>
      <OrderSummaryList items={items} />
      <OrderSummaryCosts
        subTotal={subTotal}
        shipping={SHIPPING}
        taxes={TAXES}
      />
      <OrderSummaryTotal total={total} />
      <TermsAndConditions className="order-summary__terms" />
    </div>
  );
}

export default OrderSummary;
