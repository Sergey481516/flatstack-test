import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

function Breadcrumbs({ items, activeId, onClick }) {
  const activeIndex = items.findIndex(({ id }) => id === activeId);

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {items.map(({ id, link, label }, index) => (
          <li
            key={id}
            className={cn('breadcrumbs__item', {
              'breadcrumbs__item--active': id === activeId,
              'breadcrumbs__item--link': index < activeIndex,
            })}
            onClick={() => {
              if (index < activeIndex) onClick(id);
            }}
          >
            {link ? <Link to={link}>{label}</Link> : label}
          </li>
        ))}
      </ul>
    </div>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.array,
  activeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
};

Breadcrumbs.defaultProps = {
  items: [],
  activeId: null,
  onClick: () => {},
};

export default Breadcrumbs;
