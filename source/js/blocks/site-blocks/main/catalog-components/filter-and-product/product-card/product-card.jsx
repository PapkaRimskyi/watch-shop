import React from 'react';

import ArrowButton from '../../../../../universal-items/universal-buttons/arrow-button/arrow-button';

import '../../../../../../../img/watch-list/watch_1.png';

export default function ProductCard() {
  return (
    <section className="product-card">
      <div className="product-card__imgs-container">
        <div className="product-card__main-img-container">
          <ArrowButton majorClass="product-card__switch-img product-card__switch-img--left" ariaLabel="Предыдущий слайд" />
          <figure className="product-card__main-img">
            <img src="assets/img/watch_1.png" alt="Продукт" />
          </figure>
          <ArrowButton majorClass="product-card__switch-img product-card__switch-img--right" ariaLabel="Следующий слайд" />
        </div>
        <ul className="product-card__imgs-list">
          <li className="product-card__img-item">
            <figure className="product-card__img">
              <img src="assets/img/watch_1.png" alt="Продукт" />
            </figure>
          </li>
          <li className="product-card__img-item">
            <figure className="product-card__img">
              <img src="assets/img/watch_1.png" alt="Продукт" />
            </figure>
          </li>
          <li className="product-card__img-item">
            <figure className="product-card__img">
              <img src="assets/img/watch_1.png" alt="Продукт" />
            </figure>
          </li>
          <li className="product-card__img-item">
            <figure className="product-card__img">
              <img src="assets/img/watch_1.png" alt="Продукт" />
            </figure>
          </li>
        </ul>
      </div>
      <div className="product-card__info-container">
        <div className="product-card__name-and-price">
          <p className="product-card__name">Kulte, 26 мм</p>
          <p className="product-card__price">12 700 ₽</p>
        </div>
        <ul className="product-card__detailed-buttons-list">
          <li className="product-card__button-item">
            <button className="product-card__detailed-button" type="button">Описание</button>
          </li>
          <li className="product-card__button-item">
            <button className="product-card__detailed-button" type="button">Технические характеристики</button>
          </li>
        </ul>
        <div className="product-card__detailed-info-container">
          <p className="product-card__detailed-info">
            Наручные часы KULTE, разработанные датским дизайнером Хэннингом Коппелем, были выпущены в 1982 году. Они были встречены аплодисментами, а дизайн считался революционным.
          </p>
        </div>
        <button className="button product-card__get-in-basket" type="button">В корзину</button>
      </div>
    </section>
  );
}
