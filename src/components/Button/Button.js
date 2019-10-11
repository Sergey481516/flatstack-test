import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

const ButtonType = {
  PRIMARY: 'primary',
  LINK: 'link',
  TRANSPARENT: 'transparent',
};

function Button({ className, children, onClick, type, buttonType }) {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={cn('button', className, {
        'button--primary': type === ButtonType.PRIMARY,
        'button--link': type === ButtonType.LINK,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    ButtonType.PRIMARY,
    ButtonType.LINK,
    ButtonType.TRANSPARENT,
  ]),
};

Button.defaultProps = {
  buttonType: 'button',
  onClick: () => {},
  type: ButtonType.PRIMARY,
};

export default Button;
