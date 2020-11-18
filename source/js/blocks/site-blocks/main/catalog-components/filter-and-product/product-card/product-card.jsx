/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToFavorite, addToBasket } from '../../../../../../redux/actions/basket-and-favorite/basket-and-favorite';

import useCarousel from '../../../../../../custom-hooks/use-carousel';
import useSliderNumber from '../../../../../../custom-hooks/use-slider-number';

import Description from './description/description';
import Tech from './tech/tech';

import ArrowButton from '../../../../../universal-items/universal-buttons/arrow-button/arrow-button';
import { FavoriteIcon } from '../../../../../svg-icons/user-icons';

import { DESCRIPTION, TECH, FAVORITE, BASKET } from '../../../../../../variables/variables';

import isProductAlreadySelected from '../../../../../../utils/is-product-alerady-selected';

function ProductCard({ userSelectedProducts, toFavorite, toBasket }) {
  const { product } = useLocation();
  const [sectionInformation, setSectionInformation] = useState(DESCRIPTION);
  const [favoriteStatus, setFavoriteStatus] = useState(!!isProductAlreadySelected(product.id, userSelectedProducts, FAVORITE));
  const [basketStatus, setBasketStatus] = useState(!!isProductAlreadySelected(product.id, userSelectedProducts, BASKET));

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

  // Добавляет продукт в корзину/избранное и блокирует соответствующие кнопки.

  function getInUserProductCollection(e) {
    e.preventDefault();
    switch (e.currentTarget.id) {
      case FAVORITE:
        toFavorite(product);
        setFavoriteStatus(true);
        break;
      case BASKET:
        toBasket(product);
        setBasketStatus(true);
        break;
      default:
        break;
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
          <button className="product-card__get-in-favorite" id="favorite" type="button" onClick={getInUserProductCollection} disabled={favoriteStatus} aria-label="Добавить в избранное">
            <FavoriteIcon />
          </button>
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
        <button className="button product-card__get-in-basket" id="basket" type="button" onClick={getInUserProductCollection} disabled={basketStatus}>В корзину</button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  userSelectedProducts: PropTypes.objectOf(PropTypes.array).isRequired,
  toFavorite: PropTypes.func.isRequired,
  toBasket: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userSelectedProducts: state.userSelectedProducts,
  };
}

const mapDispatchToProps = {
  toFavorite: addToFavorite,
  toBasket: addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
