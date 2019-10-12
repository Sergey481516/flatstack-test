import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { reduxForm, getFormValues } from 'redux-form';
import validate from './validation';
import isEmpty from 'lodash.isempty';
import get from 'lodash.get';

import { FormStageId } from '../constants';

import ShippingInfo from './ShippingInfo';
import BillingInfo from './BillingInfo';
import Payment from './Payment';
import { getUserPositionSelector } from '../../../selectors/user';
import { geocodeBasePath } from '../../../sagas/userSaga';

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
  handleDetectCountry,
  countries,
}) {
  const Component = FormPage[activeId];
  const values = useSelector(getFormValues(form)) || [];
  const position = useSelector(getUserPositionSelector());

  const onValueChange = useCallback(
    (values) => values.map(({ key, value }) => change(key, value)),
    [change]
  );

  const onCountryDetect = (prefix) => {
    handleDetectCountry(get(values, `${prefix}.city`), (data) => {
      const components = get(data, `${geocodeBasePath}.Address.Components`);
      const country = get(
        components.find(({ kind }) => kind === 'country'),
        'name'
      );

      change(`${prefix}.country`, country);
    });
  };

  useEffect(() => {
    if (!isEmpty(position)) {
      onValueChange([
        {
          key: 'shipping.country',
          value: position.country,
        },
        {
          key: 'shipping.city',
          value: position.city,
        },
        {
          key: 'shipping.zip',
          value: position.postalCode,
        },
      ]);
    }
  }, [position, onValueChange]);

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <Component
        handleChangeStage={handleChangeStage}
        onValueChange={onValueChange}
        validate={validate}
        values={values}
        onCountryDetect={onCountryDetect}
        countries={countries}
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
  countries: PropTypes.array,
};

export default reduxForm({
  form: ORDER_FORM_ID,
  validate,
})(OrderForm);
