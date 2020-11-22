import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../svg-icons/arrow/arrow';

// Компонент для конструкции кнопки-стрелки для слайдера.

export default function ArrowButton({ majorClass, ariaLabel, arrowsHandler }) {
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
