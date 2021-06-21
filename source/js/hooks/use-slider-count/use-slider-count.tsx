import { useState } from 'react';

import IuseSliderCount from './interfaces';

export default function useSliderCount(initCount: number, sliderLength: number): IuseSliderCount {
  const [counter, setCounter] = useState(initCount);

  const increment = () => (counter + 1 <= sliderLength ? setCounter((prevState) => prevState + 1) : setCounter(initCount));

  const decrement = () => (counter - 1 < initCount ? setCounter(sliderLength) : setCounter((prevState) => prevState - 1));

  return {
    counter,
    increment,
    decrement,
  };
}
