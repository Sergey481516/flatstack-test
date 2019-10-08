import React from 'react';
import PropTypes from 'prop-types';

import get from 'lodash.get';

import Address from './Address';
import Field from '../../../components/Field';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

import { FormStageId } from '../constants';

const mapValuesByKeys = (keys, values) =>
  keys.map((key) => ({
    key: 'billing.' + key,
    value: get(values, ['shipping', key]),
  }));

function BillingInfo({ handleChangeStage, onValueChange, validate, values }) {
  const onChangeStage = () => {
    const errors = validate(values);

    if (!get(errors, FormStageId.BILLING)) {
      handleChangeStage(FormStageId.PAYMENT);
    }
  };

  const changeSameShipping = () =>
    onValueChange(
      mapValuesByKeys(
        ['fullName', 'street', 'addressDetail', 'city', 'country', 'zip'],
        values
      )
    );

  return (
    <>
      <Title
        level={2}
        className="order-form__title"
        subTitle={<span onClick={changeSameShipping}>Same as shipping</span>}
      >
        Billing Information
      </Title>
      <div className="order-form__fieldset">
        <Field
          src="Input"
          label="Billing Contact"
          placeholder="Full Name"
          name="billing.fullName"
        />
        <Field src="Input" placeholder="Email Address" name="billing.email" />
      </div>
      <Address label="Billing Information" prefix="billing" />
      <Button onClick={onChangeStage}>Continue</Button>
    </>
  );
}

BillingInfo.propTypes = {
  handleChangeStage: PropTypes.func,
  onValueChange: PropTypes.func,
  validate: PropTypes.func,
  values: PropTypes.object,
};

export default BillingInfo;
