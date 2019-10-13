import React from 'react';
import PropType from 'prop-types';
import controls from '../controls';

function Control({ src, id, ...rest }) {
  const control = controls[src];

  if (!control) {
    throw new Error(`src ${src} not found!`);
  }

  return React.createElement(control, {
    ...rest,
    id: id || rest.name,
  });
}

Control.propTypes = {
  src: PropType.string,
  id: PropType.oneOfType([PropType.string, PropType.number]),
};

export default Control;
