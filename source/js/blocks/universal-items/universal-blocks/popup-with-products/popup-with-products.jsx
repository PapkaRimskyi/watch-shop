import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PopupWithProducts({ sectionType, getProductDataByType }) {
  const [popupProductData, setPopupProductData] = useState([]);

  // Срабатывает после изменения sectionType (при переходе из favorite в basket и наоборот).
  // Так как у нас 2 раздела для списка товаров, которые выбрал покупатель, то используем передаваемый при рендере sectionType для выяснения, какую коллекцию нам использовать во время рендера.

  useEffect(() => {
    switch (sectionType) {
      case 'favorite':
        setPopupProductData(getProductDataByType('favorite'));
        break;
      case 'basket':
        setPopupProductData(getProductDataByType('basket'));
        break;
      default:
        break;
    }
  }, [sectionType]);

  //

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
      case 'favorite':
        return 'Ваши избранные товары:';
      case 'basket':
        return 'Товары в корзине:';
      default:
        return 'Выбранные вами товары:';
    }
  }

  //

  return (
    <section className="popup-with-products">
      <h2 className="popup-with-products__popup-name">{getSectionName(sectionType)}</h2>
      {popupProductData.length !== 0
        ? (
          <>
            <ul className="popup-with-products__list">
              {popupProductData.map((product) => (
                <li key={product.id} className="popup-with-products__item">
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
                </li>
              ))}
            </ul>
            {sectionType === 'basket'
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
  getProductDataByType: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  // функция, определяющая, какой тип данных вернуть для рендера.

  function getProductDataByType(sectionType) {
    switch (sectionType) {
      case 'favorite':
        return state.userSelectedProducts.favorites;
      case 'basket':
        return state.userSelectedProducts.basket;
      default:
        return null;
    }
  }

  //

  return {
    getProductDataByType,
  };
}

export default connect(mapStateToProps)(PopupWithProducts);
