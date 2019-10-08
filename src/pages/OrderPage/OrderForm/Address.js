import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../components/Field';

const items = [
  {
    label: 'Russia',
  },
  {
    label: 'USA',
  },
];

function Address({ label, prefix }) {
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
        <Field
          src="Input"
          placeholder="City"
          name={`${prefix}.city`}
          errorPosition="left"
        />
      </div>
      <div className="order-form__fieldset order-form__fieldset-country-zip">
        <Field
          className="order-form__country-field"
          src="AutoComplete"
          items={items}
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
