/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';

import '../../../../../img/watch-list/watch_1.png';
import '../../../../../img/watch-list/watch_2.png';
import '../../../../../img/watch-list/watch_3.png';
import '../../../../../img/watch-list/watch_4.png';
import '../../../../../img/watch-list/watch_5.png';
import '../../../../../img/watch-list/watch_6.png';
import '../../../../../img/watch-list/watch_7.png';
import '../../../../../img/watch-list/watch_8.png';
import '../../../../../img/watch-list/watch_9.png';
import '../../../../../img/watch-list/watch_10.png';
import '../../../../../img/watch-list/watch_11.png';

import { FavoriteIcon, BasketIcon } from '../../../svg-icons/user-icons';

export default function ProductList({ watchInfo, majorClass }) {
  const classList = classNames(majorClass ? `${majorClass}` : false);
  return (
    <section className={`product-list ${classList}__list`}>
      <ul className="product-list__list">
        {watchInfo.map((watch, index) => (
          <li key={`${watch}-${index}`} className={`product-list__item ${classList}__item`}>
            <div className="product-list__info-container">
              <p className="product-list__name-and-price">
                <a href=" " className="product-list__product-name" aria-label="Открыть подробную информацию о товаре">{watch.brandName}</a>
                <br />
                <span className="product-list__price-name">{watch.price} &#8381;</span>
              </p>
              <ul className="product-list__interaction-list">
                <li className="product-list__interaction-item">
                  <button className="product-list__interaction-button product-list__interaction-button--favorite" type="button" aria-label="Добавить в избранное">
                    <FavoriteIcon />
                  </button>
                </li>
                <li className="product-list__interaction-item">
                  <button className="product-list__interaction-button product-list__interaction-button--basket" type="button" aria-label="Добавить в корзину">
                    <BasketIcon />
                  </button>
                </li>
              </ul>
            </div>
            <figure className={`product-list__watch-img-container ${classList}__watch-img-container`}>
              <img src={watch.imgPath} alt="Часы" />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
