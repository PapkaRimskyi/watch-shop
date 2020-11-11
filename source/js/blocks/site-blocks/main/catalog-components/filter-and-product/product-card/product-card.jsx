/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useCarousel from '../../../../../../custom-hooks/use-carousel';
import useSliderNumber from '../../../../../../custom-hooks/use-slider-number';

import Description from './description/description';
import Tech from './tech/tech';

import { DESCRIPTION, TECH } from '../../../../../../variables/variables';

import ArrowButton from '../../../../../universal-items/universal-buttons/arrow-button/arrow-button';

import '../../../../../../../img/watch-list/watch_1.png';

export default function ProductCard({ location }) {
  const { product } = location;

  // Стейт для определения, какое меню с подробной информацией открыто в данный момент.

  const [sectionInformation, setSectionInformation] = useState(DESCRIPTION);

  //

  // Создаю счетчик слайдера на основе количества картинок в свойстве extraImgs.

  const { currentNumber, sliderNumberChangeHandler } = useSliderNumber(product.extraImgs);

  //

  // Возвращаю функцию-обработчик. Проверяет тег, определяет стрелку (на которой произошел клик) и запускает sliderNumberChangeHandler для вычисления currentNumber слайдера.

  const arrowsHandler = useCarousel(sliderNumberChangeHandler);

  //

  // Переключение раздела информации товара.

  function switchSectionInformation(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON' && e.target.id !== sectionInformation) {
      setSectionInformation(e.target.id);
    }
  }

  //

  return (
    <section className="product-card">
      <div className="product-card__imgs-container">
        <div className="product-card__main-img-container">
          <ArrowButton majorClass="product-card__switch-img product-card__switch-img--left" ariaLabel="Предыдущий слайд" arrowsHandler={arrowsHandler} />
          <figure className="product-card__main-img">
            <img src={product.extraImgs[currentNumber - 1]} alt="Продукт" />
          </figure>
          <ArrowButton majorClass="product-card__switch-img product-card__switch-img--right" ariaLabel="Следующий слайд" arrowsHandler={arrowsHandler} />
        </div>
        <ul className="product-card__imgs-list">
          {product.extraImgs.map((imgPath, index) => (
            <li key={index} className={`product-card__img-item${classNames(currentNumber - 1 === index ? ' product-card__img-item--active' : null)}`}>
              <figure className="product-card__img">
                <img src={imgPath} alt="Продукт" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-card__info-container">
        <div className="product-card__name-and-price">
          <p className="product-card__name">{product.brandName.toUpperCase()}</p>
          <p className="product-card__price">{product.price}</p>
        </div>
        <ul className="product-card__detailed-buttons-list" onClick={switchSectionInformation}>
          <li className="product-card__button-item">
            <button className={`product-card__detailed-button${classNames(sectionInformation === DESCRIPTION ? ' product-card__detailed-button--active' : null)}`} id={DESCRIPTION} type="button">Описание</button>
          </li>
          <li className="product-card__button-item">
            <button className={`product-card__detailed-button${classNames(sectionInformation === TECH ? ' product-card__detailed-button--active' : null)}`} id={TECH} type="button">Технические характеристики</button>
          </li>
        </ul>
        {sectionInformation === DESCRIPTION ? <Description description={product.description} /> : <Tech techInfo={Object.values(product.techInfo)} />}
        <button className="button product-card__get-in-basket" type="button">В корзину</button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  location: PropTypes.objectOf().isRequired,
};
