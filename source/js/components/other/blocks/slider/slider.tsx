import React, { FC } from 'react';

import sliderHookReturnedValues from '../../../../hooks/use-slider-count/interfaces';

import VisuallyHidden from '../../../../styles/visually-hidden';

import List from './s-slider';

const Slider: FC<sliderHookReturnedValues> = ({ counter, increment, decrement }) => (
  <section>
    <VisuallyHidden>Переключение слайдера</VisuallyHidden>
    <List>
      <li>
        <button type="button" title="Предыдущий слайд" onClick={decrement}>
          <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" /></svg>
        </button>
      </li>
      <li>
        <p>{counter}</p>
      </li>
      <li>
        <button type="button" title="Следующий слайд" onClick={increment}>
          <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" /></svg>
        </button>
      </li>
    </List>
  </section>
);

export default Slider;
