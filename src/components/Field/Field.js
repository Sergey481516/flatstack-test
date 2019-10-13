import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control';
import FieldError from './FieldError';

import cn from 'classnames';

function Field(props) {
  const {
    id,
    label,
    help,
    className,
    meta = {},
    errorPosition,
    input,
    ...rest
  } = props;
  const { error, touched } = meta;
  const hasError = error && touched;

  return (
    <div
      className={cn('form-field', className, {
        'form-field--invalid': hasError,
      })}
    >
      {label && (
        <label className="form-field__label" htmlFor={id || input.name}>
          {label}
        </label>
      )}
      <div className="form-field__control-container">
        {hasError && <FieldError error={error} errorPosition={errorPosition} />}
        <Control {...rest} {...input} />
        {help && <div className="form-field__control-help">{help}</div>}
      </div>
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  help: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
  errorPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  input: PropTypes.object,
};

export default Field;
