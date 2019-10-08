import get from 'lodash.get';
import set from 'lodash.set';

import { requiredFields } from '../constants';

const generateRequiredError = (fieldName, prefix = '') =>
  `Please enter ${prefix} ${fieldName}`;

const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validate = (values) => {
  const errors = {};

  requiredFields.map(({ name, errorName, errorPrefix }) => {
    if (!get(values, name)) {
      set(errors, name, generateRequiredError(errorName, errorPrefix));
    }
  });

  const email = get(values, 'billing.email');
  if (email && !emailReg.test(email)) {
    set(errors, 'billing.email', 'Email is not valid');
  }

  return errors;
};

export default validate;
