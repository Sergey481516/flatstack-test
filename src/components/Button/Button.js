import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

const ButtonType = {
  PRIMARY: 'primary',
  LINK: 'link',
};

function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={cn('button', {
        'button--primary': type === ButtonType.PRIMARY,
        'button--link': type === ButtonType.LINK,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([ButtonType.PRIMARY, ButtonType.LINK]),
};

Button.defaultProps = {
  onClick: () => {},
  type: ButtonType.PRIMARY,
};

export default Button;
