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

  // В зависимости от названия sectionType возвращается нужный текст.

  function getSectionName() {
    switch (sectionType) {
      case 'favorite':
        return 'Ваши избранные товары:';
      case 'basket':
        return 'Товары, которые вы решили купить:';
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
          <ul className="popup-with-products__list">
            {popupProductData.map((product) => (
              <li className="popup-with-products__item">
                <figure className="popup-with-products__img-container">
                  <img src={product.imgPath} alt="Выбранный товар" />
                </figure>
                <ul className="popup-with-products__info-container">
                  <li className="popup-with-products__product-info">Имя товара: {product.brandName}</li>
                  <li className="popup-with-products__product-info">Тип товара:</li>
                  <li className="popup-with-products__product-info">Стоимость товара: {product.price}</li>
                </ul>
              </li>
            ))}
          </ul>
        )
        : <p className="popup-with-products__no-products">А тут пусто. Может, что нибудь добавите?</p>}
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
