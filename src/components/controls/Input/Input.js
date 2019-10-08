import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, ...rest }) {
  return <input className="input" type={type} {...rest} />;
}

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
