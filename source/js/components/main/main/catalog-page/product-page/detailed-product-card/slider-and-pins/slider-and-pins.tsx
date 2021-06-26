import React, { FC } from 'react';

import Slider from './slider/slider';
import Pins from './pins/pins';

import Container from './s-slider-and-pins';

import { IProductCardSlider } from '../../../../../../other/blocks/slider/interface';

const SliderAndPins: FC<IProductCardSlider> = ({ data, sliderRef, blockedArrow, onClickHandler, onTouchEndHandler }) => (
  <Container>
    <Slider data={data} sliderRef={sliderRef} blockedArrow={blockedArrow} onClickHandler={onClickHandler} onTouchEndHandler={onTouchEndHandler} />
    <Pins data={data} sliderRef={sliderRef} />
  </Container>
);

export default SliderAndPins;
