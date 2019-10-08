import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

function Title({ level, subTitle, className, children }) {
  const Tag = (props) =>
    React.createElement(`h${level}`, {
      className: cn('title', className),
      ...props,
    });

  return (
    <Tag>
      <div className="title__main">{children}</div>
      {subTitle && <div className="title__sub">{subTitle}</div>}
    </Tag>
  );
}

Title.propTypes = {
  level: PropTypes.number,
  subTitle: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

Title.defaultProps = {
  level: 1,
  subTitle: null,
};

export default Title;
