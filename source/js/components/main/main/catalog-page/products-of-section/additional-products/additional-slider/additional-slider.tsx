import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import ProductCard from '../../../../../../other/blocks/product-card/product-card';

import { Wrapper, List } from './s-additional-slider';
import { ArrowButton } from '../../../../../../other/blocks/slider/s-slider';

import { MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT } from '../../../../../../../styles/variables';

import { IAdditionalProductsSlider } from '../../../../../../other/blocks/slider/interface';

const AdditionalSlider: FC<IAdditionalProductsSlider> = ({ data, sliderRef, blockedArrow, onClickHandler, onTouchEndHandler }) => (
  <Wrapper>
    {data.length > MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT && (
      <ThemeProvider theme={{ width: '15px', height: '26px' }}>
        <ArrowButton className="left" title="Предыдущий товар" side="left" disabled={blockedArrow === 'left'} onClick={onClickHandler} />
      </ThemeProvider>
    )}
    <List ref={sliderRef} onTouchEnd={onTouchEndHandler}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
    {data.length > MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT && (
      <ThemeProvider theme={{ width: '15px', height: '26px' }}>
        <ArrowButton className="right" title="Предыдущий товар" side="right" disabled={blockedArrow === 'right'} onClick={onClickHandler} />
      </ThemeProvider>
    )}
  </Wrapper>
);

export default AdditionalSlider;
