import React from 'react';
import PropTypes from 'prop-types';

import ReactToPrint from 'react-to-print';
import Title from '../../../components/Title';
import Button from '../../../components/Button';

function OrderSuccess({ estimatedDate, orderNumber, pageToPrintRef }) {
  return (
    <div className="order-success">
      <Title className="order-success__title" level={2}>
        Thank you for your order!
      </Title>
      <div className="order-success__content">
        <div className="order-success__number">
          Order number is: {orderNumber}
        </div>
        <div className="order-success__email">
          Your will receive an email confirmation shortly to{' '}
          <a href="mailto:name@rapidtables.com">jonathan.smith@gmail.com</a>
        </div>
        <div className="order-success__estimated-date">
          Estimated delivery Day is <strong>{estimatedDate}</strong>
        </div>
        <div className="order-success__print">
          <ReactToPrint
            trigger={() => <Button type="link">Print Recipe</Button>}
            content={() => pageToPrintRef}
            bodyClass="body--print"
          />
        </div>
      </div>
    </div>
  );
}

OrderSuccess.propTypes = {
  estimatedDate: PropTypes.string,
  orderNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OrderSuccess;
