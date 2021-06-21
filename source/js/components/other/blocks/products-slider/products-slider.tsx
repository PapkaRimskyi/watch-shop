/* eslint-disable no-param-reassign */
import React, { FC, useMemo, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ProductCard from '../product-card/product-card';

import debounce from '../../../../utils/debounce/debounce';

import { Wrapper, List, ArrowButton } from './s-products-slider';

import { MAX_PRODUCT_COUNT_IN_SLIDER_VIEWPORT } from '../../../../styles/variables';

import Idata from '../../../main/main/catalog-page/products-of-section/additional-products/data/data';

const ProductsSlider: FC<{ data: typeof Idata }> = ({ data }) => {
  const [blockedArrow, setBlockedArrow] = useState<null | 'left' | 'right'>('left');

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

  // Изменение scrollLeft у контейнера слайдера

  const changeScrollLeft = (itemWidth: number, time: number, progress: number, list: HTMLUListElement, side: string) => {
    if (side === 'left') {
      list.scrollLeft -= (itemWidth / time) * progress;
    } else {
      list.scrollLeft += (itemWidth / time) * progress;
    }
  };

  //

  // Проверка, должна ли анимация продолжаться.

  const shouldContinueToAnimate = (time: number, progress: number, list: HTMLUListElement, side: 'left' | 'right', scrollSlider: (timestamp: number) => void) => {
    if (progress < time) {
      window.requestAnimationFrame(scrollSlider);
    } else {
      changeButtonStatus(list, side);
    }
  };

  //

  // requestAnimationFrame анимация

  function smoothSliderAnimation(time: number, list: HTMLUListElement, side: 'left' | 'right') {
    const start = performance.now();
    const defaultScrollLeftNumber = list.scrollLeft;

    return function scrollSlider(timestamp: number) {
      const itemWidth = (list.querySelector('li') as HTMLLIElement).clientWidth;
      const progress = timestamp - start;

      if (!(Math.abs(list.scrollLeft - defaultScrollLeftNumber) > itemWidth)) {
        changeScrollLeft(itemWidth, time, progress, list, side);

        shouldContinueToAnimate(time, progress, list, side, scrollSlider);
      } else {
        changeButtonStatus(list, side);
      }
    };
  }

  // Обработчик стрелок слайдера

  const arrowButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const buttonTarget = e.currentTarget as HTMLButtonElement;
    if (sliderList.current) {
      if (buttonTarget.classList.contains('left')) {
        const sliderAnimation = smoothSliderAnimation(1000, sliderList.current, 'left');
        window.requestAnimationFrame(sliderAnimation);
      } else {
        const sliderAnimation = smoothSliderAnimation(1000, sliderList.current, 'right');
        window.requestAnimationFrame(sliderAnimation);
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
          <ProductCard key={product.id} product={product} />
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
