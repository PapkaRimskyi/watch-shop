import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useSliderNumber from '../../../../../custom-hooks/use-slider-number';

import Slider from '../../../../universal-items/universal-blocks/slider/slider';

import advantagesInfo from './model/advantages-info';

import '../../../../../../img/decorative-photo/advantages__banner-1.jpg';
import '../../../../../../img/unique-icon/arrow.svg';

export default function Advantages() {
  const { currentNumber, sliderNumberChangeHandler } = useSliderNumber(advantagesInfo);
  const { imgPath, advantagesName, advantagesDescription } = advantagesInfo[currentNumber - 1];
  // debugger;

  return (
    <section className="advantages">
      <h2 className="visually-hidden">Преимущества часов</h2>
      <ul className="advantages__list">
        <TransitionGroup component={null}>
          <CSSTransition in key={currentNumber} timeout={600} classNames="swipe-slider">
            <li className="advantages__item">
              <figure className="advantages__illustration-container">
                <img src={`assets/img/${imgPath}`} alt="" className="advantages__illustration-img" />
              </figure>
              <div className="advantages__description-container">
                <h3 className="headline advantages__advantages-name">{advantagesName}</h3>
                <p className="advantages__advantages-description">{advantagesDescription}</p>
                <Link to="/catalog/mens-watch" className="button advantages__see-catalog">Смотреть каталог</Link>
              </div>
            </li>
          </CSSTransition>
        </TransitionGroup>
      </ul>
      <Slider majorClass="advantages__slider" sliderNumber={currentNumber} sliderNumberChangeHandler={sliderNumberChangeHandler} />
    </section>
  );
}
