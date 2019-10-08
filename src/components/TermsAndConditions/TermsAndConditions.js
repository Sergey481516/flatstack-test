import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function TermsAndConditions({ link, className }) {
  return (
    <div className={cn('terms', className)}>
      <span className="terms__text">
        All purchases are subject to our{' '}
        <a className="terms__link" href={link}>
          Terms and Conditions
        </a>
        .
      </span>
    </div>
  );
}

TermsAndConditions.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
};

TermsAndConditions.defaultProps = {
  link: '#',
};

export default TermsAndConditions;
