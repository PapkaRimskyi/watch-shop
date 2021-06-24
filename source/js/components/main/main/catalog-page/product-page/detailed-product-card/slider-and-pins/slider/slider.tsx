import React, { FC } from 'react';

import { List, Img } from './s-slider';

const Slider: FC = ({ data }) => (
  <List>
    {data.map((image, index) => (
      <li key={`${image}-slide`}>
        <Img id={`slide-${index + 1}`} src={image} alt="Продукт" />
      </li>
    ))}
  </List>
);

export default Slider;
