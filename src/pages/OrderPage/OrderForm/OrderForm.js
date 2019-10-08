import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { reduxForm, getFormValues } from 'redux-form';
import validate from './validation';

import { FormStageId } from '../constants';

import ShippingInfo from './ShippingInfo';
import BillingInfo from './BillingInfo';
import Payment from './Payment';

const FormPage = {
  [FormStageId.SHIPPING]: ShippingInfo,
  [FormStageId.BILLING]: BillingInfo,
  [FormStageId.PAYMENT]: Payment,
};

export const ORDER_FORM_ID = 'orderForm';

function OrderForm({
  handleSubmit,
  handleChangeStage,
  activeId,
  validate,
  form,
  change,
}) {
  const Component = FormPage[activeId];
  const values = useSelector(getFormValues(form));
  const onValueChange = (values) =>
    values.map(({ key, value }) => change(key, value));

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <Component
        handleChangeStage={handleChangeStage}
        onValueChange={onValueChange}
        validate={validate}
        values={values}
      />
    </form>
  );
}

OrderForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChangeStage: PropTypes.func,
  activeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  validate: PropTypes.func,
  form: PropTypes.string,
  change: PropTypes.func,
};

export default reduxForm({
  form: ORDER_FORM_ID,
  validate,
})(OrderForm);
