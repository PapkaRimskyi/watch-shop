import React from 'react';
import { Link } from 'react-router-dom';
import useSliderNumber from '../../../../../custom-hooks/use-slider-number';

import Slider from '../../../../universal-items/universal-blocks/slider/slider';

import advantagesInfo from './model/advantages-info';

import '../../../../../../img/decorative-photo/advantages__banner-1.jpg';
import '../../../../../../img/unique-icon/arrow.svg';

export default function Advantages() {
  const { currentNumber, sliderNumberChangeHandler } = useSliderNumber(advantagesInfo);
  const { imgPath, advantagesName, advantagesDescription } = advantagesInfo[currentNumber - 1];

  return (
    <section className="advantages">
      <ul className="advantages__list">
        <li className="advantages__item">
          <figure className="advantages__illustration-container">
            <img src={`assets/img/${imgPath}`} alt="" className="advantages__illustration-img" />
          </figure>
          <div className="advantages__description-container">
            <h3 className="headline advantages__advantages-name">{advantagesName}</h3>
            <p className="advantages__advantages-description">{advantagesDescription}</p>
            <Link to="/catalog" className="button advantages__see-catalog">Смотреть каталог</Link>
          </div>
        </li>
      </ul>
      <Slider majorClass="advantages__slider" sliderNumber={currentNumber} sliderNumberChangeHandler={sliderNumberChangeHandler} />
    </section>
  );
}
