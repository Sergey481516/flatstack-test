import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Cleave from 'cleave.js/react';

import cn from 'classnames';

const CardType = {
  AMEX: 'amex',
  VISA: 'visa',
  DINERS: 'diners',
  MASTERCARD: 'mastercard',
  JCB: 'jcb',
  DISCOVER: 'discover',
};

const UNKNOWN_CARD = 'unknown';

function InputCreditCard({ className, ...rest }) {
  const [type, setType] = useState('unknown');

  return (
    <div
      className={cn('input-credit-card', {
        [`input-credit-card--${type}`]: type !== UNKNOWN_CARD,
      })}
    >
      <Cleave
        className="input-credit-card__input"
        options={{
          creditCard: true,
          onCreditCardTypeChanged: setType,
        }}
        {...rest}
      />
    </div>
  );
}

InputCreditCard.propTypes = {
  className: PropTypes.string,
};

export default InputCreditCard;
