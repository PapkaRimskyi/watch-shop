/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import { FAVORITE, BASKET } from '../../../../variables/variables';

export default function PopupWithProducts({ sectionType, popupProductData, workWithStorage }) {
  // Определение типа товара по его кодировке.

  function defineProductType(productType) {
    switch (productType.match(/\D/g).join('')) {
      case 'mw':
        return 'мужские часы';
      case 'wa(s)':
        return 'ремешок для мужских часов';
      default:
        return 'тип товара';
    }
  }

  //

  // В зависимости от названия sectionType возвращается нужный текст.

  function getSectionName() {
    switch (sectionType) {
      case FAVORITE:
        return 'Ваши избранные товары:';
      case BASKET:
        return 'Товары в корзине:';
      default:
        return 'Выбранные вами товары:';
    }
  }

  //

  // Удалить товар

  function deleteProduct(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      const productID = e.target.closest('li').id;
      const deletingProduct = popupProductData.find((item) => item.id === productID);
      switch (sectionType) {
        case FAVORITE:
          workWithStorage(deletingProduct, true);
          break;
        case BASKET:
          workWithStorage(deletingProduct, true);
          break;
        default:
          return null;
      }
    }
    return null;
  }

  //

  return (
    <section className="popup-with-products">
      <h2 className="popup-with-products__popup-name">{getSectionName()}</h2>
      {popupProductData.length !== 0
        ? (
          <>
            <ul className="popup-with-products__list" onClick={deleteProduct}>
              {popupProductData.map((product) => (
                <li key={product.id} id={product.id} className="popup-with-products__item">
                  <figure className="popup-with-products__img-container">
                    <img src={product.imgPath} alt="Выбранный товар" />
                  </figure>
                  <ul className="popup-with-products__info-list">
                    <li className="popup-with-products__info-item">
                      <p className="popup-with-products__product-info">Имя товара: <span>{product.brandName.toUpperCase()}</span></p>
                    </li>
                    <li className="popup-with-products__info-item">
                      <p className="popup-with-products__product-info">Тип товара: <span>{defineProductType(product.id)}</span></p>
                    </li>
                    <li className="popup-with-products__info-item">
                      <p className="popup-with-products__product-info">Стоимость товара: <span>{product.price}</span></p>
                    </li>
                  </ul>
                  <button className="popup-with-products__delete-product" type="button">Удалить</button>
                </li>
              ))}
            </ul>
            {sectionType === BASKET
              ? <p className="popup-with-products__products-sum">Общая сумма: {popupProductData.map((item) => item.price.match(/\d/g).join('')).reduce((prev, current) => +prev + +current)} ₽</p>
              : null}
          </>
        )
        : <p className="popup-with-products__no-products">А тут пусто. Может, что-нибудь добавите?</p>}
    </section>
  );
}

PopupWithProducts.propTypes = {
  sectionType: PropTypes.string.isRequired,
  popupProductData: PropTypes.arrayOf(PropTypes.object),
  workWithStorage: PropTypes.func.isRequired,
};

PopupWithProducts.defaultProps = {
  popupProductData: null,
};
