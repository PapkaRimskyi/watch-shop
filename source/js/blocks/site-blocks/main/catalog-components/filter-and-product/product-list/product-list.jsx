/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { addToFavorite, addToBasket } from '../../../../../../redux/actions/basket-and-favorite/basket-and-favorite';

import { FavoriteIcon, BasketIcon } from '../../../../../svg-icons/user-icons';

import { FAVORITE, BASKET } from '../../../../../../variables/variables';

import '../../../../../../../img/watch-list/watch_1.png';
import '../../../../../../../img/watch-list/watch_2.png';
import '../../../../../../../img/watch-list/watch_3.png';
import '../../../../../../../img/watch-list/watch_4.png';
import '../../../../../../../img/watch-list/watch_5.png';
import '../../../../../../../img/watch-list/watch_6.png';
import '../../../../../../../img/watch-list/watch_7.png';
import '../../../../../../../img/watch-list/watch_8.png';
import '../../../../../../../img/watch-list/watch_9.png';
import '../../../../../../../img/watch-list/watch_10.png';
import '../../../../../../../img/watch-list/watch_11.png';

function ProductList({ watchInfo, majorClass, userSelectedProducts, toFavorite, toBasket }) {
  // Пользуюсь хуком для составления ссылки на страницу подробной информации о товаре.

  const location = useLocation();

  //

  // Поиск продукта среди watchInfo.

  function findProductByID(productCollection, productID) {
    return productCollection.find((product) => product.id === productID);
  }

  //

  // Функция, которая проверяет, записан ли этот продукт в коллекцию userSelectedProducts. Возвращает булево значение.

  function isProductAlreadySelected(productID, selectedProductsCollection, buttonType) {
    return selectedProductsCollection[buttonType].find((product) => product.id === productID);
  }

  //

  // Делегирование. Использую id у li для хранения id продукта. В зависимости от нажатой кнопки, пушится или в коллекцию избранного или в корзину.

  function productSelected(e) {
    e.preventDefault();
    if (e.target.closest('li')) {
      const productID = e.target.closest('.product-list__item').id;
      const buttonClassList = e.target.closest('button') ? Array.from(e.target.closest('button').classList).join(' ') : '';
      if (buttonClassList.includes(FAVORITE)) {
        toFavorite(findProductByID(watchInfo, productID), isProductAlreadySelected(productID, userSelectedProducts, FAVORITE));
      } else if (buttonClassList.includes(BASKET)) {
        toBasket(findProductByID(watchInfo, productID), isProductAlreadySelected(productID, userSelectedProducts, BASKET));
      }
    }
  }

  //

  // Добавляем соответствующий класс к кнопке при добавлении товара в корзину или избранное.

  function getActiveButtonStyle(buttonType, productID, selectedProductsCollection) {
    const partOfClass = 'product-list__interaction-button';
    switch (buttonType) {
      case FAVORITE:
      case BASKET:
        return classNames(isProductAlreadySelected(productID, selectedProductsCollection, buttonType) ? ` ${partOfClass}--${buttonType}-active` : null);
      default:
        return null;
    }
  }

  //

  return (
    <section className={`product-list ${classNames(majorClass ? `${majorClass}__list` : null)}`}>
      <ul className="product-list__list" onClick={productSelected}>
        {watchInfo.map((watch, index) => (
          <li key={`${watch}-${index}`} id={watch.id} className={`product-list__item ${classNames(majorClass ? `${majorClass}__item` : null)}`}>
            <div className="product-list__info-container">
              <p className="product-list__name-and-price">
                <Link to={{ pathname: `${location.pathname}/:${watch.id}`, product: findProductByID(watchInfo, watch.id) }} className="product-list__product-name" aria-label="Открыть подробную информацию о товаре">{watch.brandName}</Link>
                <br />
                <span className="product-list__price-name">{watch.price}</span>
              </p>
              <ul className="product-list__interaction-list">
                <li className="product-list__interaction-item">
                  <button className={`product-list__interaction-button product-list__interaction-button--favorite${getActiveButtonStyle(FAVORITE, watch.id, userSelectedProducts)}`} type="button" aria-label="Добавить в избранное">
                    <FavoriteIcon />
                  </button>
                </li>
                <li className="product-list__interaction-item">
                  <button className={`product-list__interaction-button product-list__interaction-button--basket${getActiveButtonStyle(BASKET, watch.id, userSelectedProducts)}`} type="button" aria-label="Добавить в корзину">
                    <BasketIcon />
                  </button>
                </li>
              </ul>
            </div>
            <figure className={`product-list__watch-img-container ${classNames(majorClass ? `${majorClass}__watch-img-container` : null)}`}>
              <img src={watch.imgPath} alt="Продукт магазина" />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

ProductList.propTypes = {
  watchInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  majorClass: PropTypes.string,
  userSelectedProducts: PropTypes.objectOf(PropTypes.array).isRequired,
  toFavorite: PropTypes.func.isRequired,
  toBasket: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  majorClass: null,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
