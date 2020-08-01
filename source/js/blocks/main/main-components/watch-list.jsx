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

export default function WatchList(props) {
  const { watchInfo } = props;
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
                    <svg width="21" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.969 5.771c-.278-2.765-2.438-4.77-5.142-4.77-1.802 0-3.451.877-4.38 2.285C9.527 1.86 7.947 1 6.173 1 3.47 1 1.31 3.006 1.032 5.77c-.022.123-.112.766.161 1.814.394 1.511 1.304 2.887 2.63 3.975L10.444 17l6.733-5.44c1.327-1.09 2.237-2.464 2.63-3.976.274-1.048.184-1.69.163-1.813zm-.874 1.661c-.36 1.38-1.193 2.639-2.408 3.636l-6.24 5.042-6.132-5.041c-1.217-.999-2.05-2.256-2.41-3.637-.259-.992-.153-1.552-.152-1.556l.005-.033c.238-2.423 2.094-4.181 4.415-4.181 1.713 0 3.22.953 3.936 2.487l.337.723.336-.723c.704-1.51 2.292-2.487 4.045-2.487 2.32 0 4.178 1.759 4.42 4.212 0 .006.107.566-.152 1.558z" fill="#1B1A17" stroke="#1B1A17" strokeWidth=".75" /></svg>
                  </button>
                </li>
                <li className="watch-list__interaction-item">
                  <button className="watch-list__interaction-button watch-list__interaction-button--basket" type="button" aria-label="Добавить в корзину">
                    <svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.896 3.052a.586.586 0 00-.449-.233L6.282 2.364c-.32-.013-.588.22-.602.522-.014.3.233.555.552.568l10.41.424-2.047 6.031H5.487L3.84 1.447a.554.554 0 00-.357-.41L.79.038a.59.59 0 00-.75.309c-.116.28.03.597.326.707l2.397.89 1.674 8.61a.57.57 0 00.568.447h.278l-.634 1.664a.433.433 0 00.06.415.49.49 0 00.393.194h.445c-.276.29-.445.671-.445 1.09 0 .903.777 1.637 1.732 1.637.956 0 1.733-.734 1.733-1.636 0-.42-.17-.802-.445-1.091H11.9c-.276.29-.445.671-.445 1.09 0 .903.777 1.637 1.732 1.637.956 0 1.733-.734 1.733-1.636 0-.42-.17-.802-.445-1.091h.541a.468.468 0 00.481-.455.468.468 0 00-.481-.454h-9.23L6.307 11h8.71a.575.575 0 00.55-.379l2.406-7.091a.52.52 0 00-.076-.478zM6.834 15.092c-.424 0-.77-.327-.77-.728 0-.401.346-.728.77-.728.425 0 .77.327.77.728 0 .4-.345.727-.77.727zm6.353 0c-.425 0-.77-.327-.77-.728 0-.401.345-.728.77-.728.425 0 .77.327.77.728 0 .4-.345.727-.77.727z" fill="#1B1A17" /></svg>
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
