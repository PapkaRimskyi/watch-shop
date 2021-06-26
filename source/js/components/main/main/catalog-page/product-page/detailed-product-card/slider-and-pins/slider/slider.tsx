import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Wrapper, List, Img } from './s-slider';
import { ArrowButton } from '../../../../../../../other/blocks/slider/s-slider';

import { IProductCardSlider } from '../../../../../../../other/blocks/slider/interface';

const Slider: FC<IProductCardSlider> = ({ data, sliderRef, blockedArrow, onClickHandler, onTouchEndHandler }) => (
  <Wrapper>
    <ThemeProvider theme={{ width: '15px', height: '26px' }}>
      <ArrowButton className="left" title="Предыдущий слайд" side="left" disabled={blockedArrow === 'left'} onClick={onClickHandler} />
    </ThemeProvider>
    <List ref={sliderRef} onTouchEnd={onTouchEndHandler}>
      {data.map((image, index) => (
        <li key={`${image}-slide`}>
          <Img id={`slide-${index + 1}`} src={image} alt="Продукт" />
        </li>
      ))}
    </List>
    <ThemeProvider theme={{ width: '15px', height: '26px' }}>
      <ArrowButton className="right" title="Следующий слайд" side="right" disabled={blockedArrow === 'right'} onClick={onClickHandler} />
    </ThemeProvider>
  </Wrapper>
);

export default Slider;
