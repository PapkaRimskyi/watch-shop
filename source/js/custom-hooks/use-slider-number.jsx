/* eslint-disable no-lonely-if */
import { useState } from 'react';

// Кастомный хук под слайдер.

export default function useSliderNumber(itemList) {
  const DEFAULT_NUMBER = 1;
  const [currentNumber, setCurrentNumber] = useState(DEFAULT_NUMBER);

  function sliderNumberChangeHandler(side) {
    if (side === 'left') {
      if (currentNumber - DEFAULT_NUMBER < DEFAULT_NUMBER) {
        setCurrentNumber(itemList.length);
      } else {
        setCurrentNumber((prevState) => prevState - DEFAULT_NUMBER);
      }
    } else {
      if (currentNumber + 1 > itemList.length) {
        setCurrentNumber(DEFAULT_NUMBER);
      } else {
        setCurrentNumber((prevState) => prevState + DEFAULT_NUMBER);
      }
    }
  }

  return { currentNumber, sliderNumberChangeHandler };
}
