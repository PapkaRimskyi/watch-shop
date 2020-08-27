import React from 'react';
import PropTypes from 'prop-types';

export default function UserButton({ buttonInfo, handler }) {
  const counter = <span className="favorite-button__count">0</span>;
  const { className, ariaLabel, icon } = buttonInfo;

  return (
    <button className={`user-button ${className}-button`} type="button" aria-label={ariaLabel} onClick={handler || null}>
      {ariaLabel === 'Избранное' ? counter : ''}
      {icon}
    </button>
  );
}

UserButton.propTypes = {
  buttonInfo: PropTypes.shape({
    className: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
  handler: PropTypes.func,
};

UserButton.defaultProps = {
  handler: null,
};
