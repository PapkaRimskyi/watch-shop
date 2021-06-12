import React from 'react';

/* eslint-disable semi */
export default interface IArrowButton {
  className?: string,
  title: string,
  side: 'left' | 'right',
  disabled: boolean,
  onClick: (e: React.MouseEvent) => void,
}
