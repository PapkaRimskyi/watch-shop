import React, { FC } from 'react';

import sliderHookReturnedValues from '../../../../hooks/use-slider-count/interfaces';

import ArrowButton from '../../buttons/arrow-button/arrow-button';

import VisuallyHidden from '../../../../styles/mixins/visually-hidden/visually-hidden';

import List from './s-slider';

const Slider: FC<sliderHookReturnedValues> = ({ counter, increment, decrement }) => (
  <section>
    <VisuallyHidden>Переключение слайдера</VisuallyHidden>
    <List>
      <li>
        <ArrowButton title="Предыдущий слайд" side="left" onClick={decrement} />
      </li>
      <li>
        <p>{counter}</p>
      </li>
      <li>
        <ArrowButton title="Следующий слайд" side="right" onClick={increment} />
      </li>
    </List>
  </section>
);

export default Slider;
