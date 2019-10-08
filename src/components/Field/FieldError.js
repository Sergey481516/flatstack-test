import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

function FieldError({ error, errorPosition }) {
  return (
    <div
      className={cn('form-field__error', `form-field__error--${errorPosition}`)}
    >
      {error}
    </div>
  );
}

FieldError.propTypes = {
  error: PropTypes.string,
  errorPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

FieldError.defaultProps = {
  errorPosition: 'top',
};

export default FieldError;
