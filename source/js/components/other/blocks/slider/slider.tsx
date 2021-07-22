/* eslint-disable no-param-reassign */
import React, { FC, useMemo, useRef, useState } from 'react';

import debounce from '../../../../utils/debounce/debounce';

import { ISlider } from './interface';

const Slider: FC<ISlider> = ({ data, SliderComponent }) => {
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
    const itemWidth = (list.querySelector('li') as HTMLLIElement).clientWidth;

    return function scrollSlider(timestamp: number) {
      const progress = Math.abs(Math.min(timestamp - start, time));

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

  return (
    <SliderComponent data={data} sliderRef={sliderList} blockedArrow={blockedArrow} onClickHandler={arrowButtonHandler} onTouchEndHandler={toucnEndHandlerDebounced} />
  );
};

export default Slider;
