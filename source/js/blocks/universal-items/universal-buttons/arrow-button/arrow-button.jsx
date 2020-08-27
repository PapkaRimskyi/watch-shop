import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../svg-icons/arrow';

export default function ArrowButton({ ariaLabel, majorClass, arrowsHandler }) {
  return (
    <button className={majorClass} type="button" aria-label={ariaLabel} onClick={arrowsHandler}>
      <Arrow />
    </button>
  );
}

ArrowButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  majorClass: PropTypes.string.isRequired,
  arrowsHandler: PropTypes.func.isRequired,
};
