/* eslint-disable react/no-array-index-key */
import React from 'react';

import '../../../../img/watch-list/watch_1.png';
import '../../../../img/watch-list/watch_2.png';
import '../../../../img/watch-list/watch_3.png';
import '../../../../img/watch-list/watch_4.png';
import '../../../../img/watch-list/watch_5.png';
import '../../../../img/watch-list/watch_6.png';
import '../../../../img/watch-list/watch_7.png';
import '../../../../img/watch-list/watch_8.png';
import '../../../../img/watch-list/watch_9.png';
import '../../../../img/watch-list/watch_10.png';
import '../../../../img/watch-list/watch_11.png';

import { FavoriteIcon, BasketIcon } from '../../svg-icons/user-icons';

export default function WatchList({ watchInfo }) {
  return (
    <section className="watch-list">
      <h2 className="visually-hidden">Каталог часов</h2>
      <ul className="watch-list__list">
        {watchInfo.map((watch, index) => (
          <li key={`${watch}-${index}`} className="watch-list__item">
            <div className="watch-list__info-container">
              <p className="watch-list__name-and-price">
                <a href=" " className="watch-list__product-name">{watch.brandName}</a>
                <br />
                <span className="watch-list__price-name">{watch.price} &#8381;</span>
              </p>
              <ul className="watch-list__interaction-list">
                <li className="watch-list__interaction-item">
                  <button className="watch-list__interaction-button watch-list__interaction-button--favorite" type="button" aria-label="Добавить в избранное">
                    <FavoriteIcon />
                  </button>
                </li>
                <li className="watch-list__interaction-item">
                  <button className="watch-list__interaction-button watch-list__interaction-button--basket" type="button" aria-label="Добавить в корзину">
                    <BasketIcon />
                  </button>
                </li>
              </ul>
            </div>
            <figure className="watch-list__watch-img-container">
              <img src={watch.imgPath} alt="Часы" />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
