import React, { useState, useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

const checkElementOverflow = (element) => {
  if (element) {
    const coords = findDOMNode(element).getBoundingClientRect();

    return coords.left < 0 || coords.left > window.innerWidth;
  }

  return false;
};

function FieldError({ error, errorPosition }) {
  const [elementIsOutOfWindow, setElementIsOutOfWindow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    setElementIsOutOfWindow(checkElementOverflow(element.current));
  }, [error]);

  return (
    <div
      ref={element}
      className={cn(
        'form-field__error',
        `form-field__error--${elementIsOutOfWindow ? 'top' : errorPosition}`
      )}
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
