import React from 'react';
import PropTypes from 'prop-types';
import useCarousel from '../../../../custom-hooks/use-carousel';

import ArrowButton from '../../universal-buttons/arrow-button/arrow-button';

export default function Slider({ sliderNumber, majorClass, sliderNumberChangeHandler }) {
  // Создаем копию обработчика слайдера. В arrowsHandler находится возвращенная функция из useCarousel.

  const arrowsHandler = useCarousel(sliderNumberChangeHandler);

  //
  return (
    <div className={`slider ${majorClass}`} aria-label="Блок с переключением слайдеров">
      <ArrowButton majorClass="arrow-button slider__button slider__button--left" ariaLabel="Предыдущий слайд" arrowsHandler={arrowsHandler} />
      <p className="slider__slide-number">{`0${sliderNumber}`}</p>
      <ArrowButton majorClass="arrow-button slider__button slider__button--right" ariaLabel="Следующий слайд" arrowsHandler={arrowsHandler} />
    </div>
  );
}

Slider.propTypes = {
  sliderNumber: PropTypes.number.isRequired,
  majorClass: PropTypes.string.isRequired,
  sliderNumberChangeHandler: PropTypes.func.isRequired,
};
