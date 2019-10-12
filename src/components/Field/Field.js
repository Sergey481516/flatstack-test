import React from 'react';
import PropTypes from 'prop-types';

import FieldError from './FieldError';
import controls from '../controls';

import cn from 'classnames';

function Field(props) {
  const {
    id,
    src,
    label,
    help,
    className,
    meta,
    name,
    errorPosition,
    input,
    ...rest
  } = props;
  const { error, touched } = meta;
  const hasError = error && touched;
  const control = controls[src];

  if (!control) {
    throw new Error(`src ${src} not found!`);
  }

  return (
    <div
      className={cn('form-field', className, {
        'form-field--invalid': hasError,
      })}
    >
      {label && (
        <label className="form-field__label" htmlFor={id || name}>
          {label}
        </label>
      )}
      <div className="form-field__control-container">
        {hasError && <FieldError error={error} errorPosition={errorPosition} />}
        {React.createElement(control, Object.assign({}, rest, input))}
        {help && <div className="form-field__control-help">{help}</div>}
      </div>
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
  errorPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  input: PropTypes.object,
};

export default Field;
