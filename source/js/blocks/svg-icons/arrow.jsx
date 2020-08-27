import React from 'react';
import PropTypes from 'prop-types';

export default function Arrow({ className }) {
  return (
    <svg className={className || null} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" />
    </svg>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
};

Arrow.defaultProps = {
  className: null,
};
