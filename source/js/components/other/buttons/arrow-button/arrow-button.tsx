import React, { FC } from 'react';

import IArrowButton from './interface';

import Button from './s-arrow-button';

const ArrowButton: FC<IArrowButton> = ({ className, title, side, onClick }) => (
  <Button className={className} type="button" title={title} side={side} onClick={onClick}>
    <svg width="7" height="12" fill="none" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" /></svg>
  </Button>
);

export default ArrowButton;
