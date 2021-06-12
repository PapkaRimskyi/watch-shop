import React, { FC, useMemo, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ProductItem from '../product-item/product-item';

import debounce from '../../../../utils/debounce/debounce';

import { Wrapper, List, ArrowButton } from './s-products-slider';

import { MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT } from '../../../../styles/variables';

import Idata from '../../../main/main/catalog-page/products/additional-products/data/data';

const ProductsSlider: FC<{ data: typeof Idata }> = ({ data }) => {
  const [blockedArrow, setBlockedArrow] = useState<null | 'left' | 'right'>(null);

  // Мемоизирую слушатель onTouchEnd. Когда таймер закончится, произойдёт расчет скролла списка и, в зависимости от данных, стрелки скроются.

  const toucnEndHandlerDebounced = useMemo(() => debounce(arrowButtonTouchEndHandler, 1000), []);

  //

  // Сохранаяю ссылку на список с товаром

  const sliderList = useRef<HTMLUListElement>(null);

  //

  // Регулирует состояние стрелок слайдера

  function changeButtonStatus(list: HTMLUListElement, side: 'left' | 'right') {
    switch (side) {
      case 'left':
        setBlockedArrow(list.scrollLeft === 0 ? 'left' : null);
        break;
      case 'right':
        setBlockedArrow(list.clientWidth + list.scrollLeft === list.scrollWidth ? 'right' : null);
        break;
      default:
        break;
    }
  }

  //

  // Обработчик стрелок слайдера

  const arrowButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const buttonTarget = e.currentTarget as HTMLButtonElement;
    if (sliderList.current) {
      const itemWidth = (sliderList.current.firstChild as HTMLLIElement).clientWidth;
      if (buttonTarget.classList.contains('left')) {
        sliderList.current.scrollLeft -= itemWidth;
        changeButtonStatus(sliderList.current, 'left');
      } else {
        sliderList.current.scrollLeft += itemWidth;
        changeButtonStatus(sliderList.current, 'right');
      }
    }
  };

  //

  // Обработчик на touchEnd событие (когда пользователь прекратил листать список с помощью пальца)

  function arrowButtonTouchEndHandler() {
    if (sliderList.current) {
      if (sliderList.current.scrollLeft === 0) {
        setBlockedArrow('left');
      } else if (sliderList.current.clientWidth + sliderList.current.scrollLeft === sliderList.current.scrollWidth) {
        setBlockedArrow('right');
      } else {
        setBlockedArrow(null);
      }
    }
  }

  //

  // onTouchEnd={arrowButtonTouchHandler}

  return (
    <Wrapper>
      {data.length > MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT && (
        <ThemeProvider theme={{ width: '15px', height: '26px' }}>
          <ArrowButton className="left" title="Предыдущий товар" side="left" disabled={blockedArrow === 'left'} onClick={arrowButtonHandler} />
        </ThemeProvider>
      )}
      <List onTouchEnd={toucnEndHandlerDebounced} ref={sliderList}>
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </List>
      {data.length > MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT && (
        <ThemeProvider theme={{ width: '15px', height: '26px' }}>
          <ArrowButton className="right" title="Следующий товар" side="right" disabled={blockedArrow === 'right'} onClick={arrowButtonHandler} />
        </ThemeProvider>
      )}
    </Wrapper>
  );
};

export default ProductsSlider;
