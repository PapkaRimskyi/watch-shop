import React, { FC } from 'react';

import Slider from './slider/slider';
import Pins from './pins/pins';

import Container from './s-slider-and-pins';

const SliderAndPins: FC = ({ data }) => (
  <Container>
    <Slider data={data} />
    <Pins data={data} />
  </Container>
);

export default SliderAndPins;
