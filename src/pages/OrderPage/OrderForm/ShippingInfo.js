import React from 'react';
import PropTypes from 'prop-types';

import get from 'lodash.get';

import Address from './Address';
import Field from '../../../components/Field';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

import { FormStageId } from '../constants';

function ShippingInfo({ handleChangeStage, validate, values }) {
  const onChangeStage = () => {
    const errors = validate(values);

    if (!get(errors, FormStageId.SHIPPING)) {
      handleChangeStage(FormStageId.BILLING);
    }
  };

  return (
    <>
      <Title level={2} className="order-form__title">
        Shipping Info
      </Title>
      <div className="order-form__fieldset">
        <Field
          src="Input"
          label="Recipient"
          placeholder="Full Name"
          name="shipping.fullName"
          autoFocus={true}
        />
        <Field
          className="order-form__daytime-phone-field"
          src="InputNumber"
          placeholder="Daytime Phone"
          help="For delivery questions only"
          name="shipping.daytimePhone"
          errorPosition="left"
        />
      </div>
      <Address label="Address" prefix="shipping" />
      <Button onClick={onChangeStage}>Continue</Button>
    </>
  );
}

ShippingInfo.propTypes = {
  handleChangeStage: PropTypes.func,
  validate: PropTypes.func,
  values: PropTypes.object,
};

export default ShippingInfo;
