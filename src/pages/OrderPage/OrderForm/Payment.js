import React from 'react';

import Title from '../../../components/Title';
import Field from '../../../components/Field';
import Button from '../../../components/Button';

const cardMaskPart = [/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/];
const cardMask = [
  ...cardMaskPart,
  ' ',
  ...cardMaskPart,
  ' ',
  ...cardMaskPart,
  ' ',
  ...cardMaskPart,
  ' ',
  ...cardMaskPart,
];
const expireDateMask = [/[0-1]/, /[0-2]/, '/', /[0-9]/, /[0-9]/];
const securityCodeMask = cardMaskPart.slice();

function Payment() {
  return (
    <>
      <Title level={2} className="order-form__title">
        Payment
      </Title>
      <div className="order-form__security-help">
        This is a secure 128-bit SSL encrypted payment
      </div>
      <div className="order-form__fieldset">
        <Field
          src="Input"
          label="Cardholder Name"
          placeholder="Name as it appears on your card"
          name="payment.cardholder"
        />
      </div>
      <div className="order-form__fieldset">
        <Field
          src="InputCreditCard"
          label="Card Number"
          mask={cardMask}
          placeholder="XXXX XXXX XXXX XXXX XXXX"
          name="payment.cardNumber"
        />
      </div>
      <div className="order-form__fieldset order-form__fieldset--row">
        <Field
          className="order-form__expire-date-field"
          src="InputMask"
          mask={expireDateMask}
          label="Expire Date"
          placeholder="MM / YY"
          name="payment.expireDate"
        />
        <Field
          className="order-form__security-code-field"
          src="InputMask"
          guide={false}
          mask={securityCodeMask}
          label="Security Code"
          name="payment.securityCode"
          errorPosition="right"
        />
      </div>
      <Button>Pay Securely</Button>
    </>
  );
}

export default Payment;
