import React from 'react';

import Arrow from '../../../svg-icons/arrow';

export default function ArrowButton({ ariaLabel, majorClass, arrowsHandler }) {
  return (
    <button className={majorClass} type="button" aria-label={ariaLabel} onClick={arrowsHandler}>
      <Arrow />
    </button>
  );
}
