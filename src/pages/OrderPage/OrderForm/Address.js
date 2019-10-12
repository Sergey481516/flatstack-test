import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../components/Field';
import Button from '../../../components/Button';
import Api from '../../../api';

function Address({ label, prefix, onCountryDetect }) {
  return (
    <>
      <div className="order-form__fieldset">
        <Field
          label={label}
          src="Input"
          placeholder="Street Address"
          name={`${prefix}.street`}
        />
        <Field
          src="Input"
          placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
          name={`${prefix}.addressDetail`}
        />
      </div>
      <div className="order-form__fieldset">
        <div className="order-form__field-with-action">
          <Field
            src="Input"
            placeholder="City"
            name={`${prefix}.city`}
            errorPosition="left"
          />
          <Button
            onClick={() => onCountryDetect(prefix)}
            className="order-form__detect-country"
            type="transparent"
          />
        </div>
      </div>
      <div className="order-form__fieldset order-form__fieldset-country-zip">
        <Field
          className="order-form__country-field"
          src="AutoComplete"
          url={Api.GET_COUNTRIES}
          labelFieldId="name"
          placeholder="Country"
          name={`${prefix}.country`}
          errorPosition="left"
        />
        <Field
          className="order-form__zip-field"
          src="Input"
          placeholder="ZIP"
          name={`${prefix}.zip`}
          errorPosition="right"
        />
      </div>
    </>
  );
}

Address.propTypes = {
  label: PropTypes.string,
  prefix: PropTypes.string,
};

export default Address;
