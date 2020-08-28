/* eslint-disable react/no-array-index-key */
import React from 'react';

import WatchAllLink from '../../../../universal-items/universal-buttons/watch-all-link/watch-all-link';

import popularModelsInfo from './model/popular-models-info';

import '../../../../../../img/watch-example/popular-watch-1.png';
import '../../../../../../img/watch-example/popular-watch-2.png';
import '../../../../../../img/watch-example/popular-watch-3.png';
import '../../../../../../img/watch-example/popular-watch-4.png';

export default function PopularModels() {
  return (
    <section className="popular-models">
      <h2 className="headline popular-models__headline">Популярные модели</h2>
      <WatchAllLink href="/catalog" majorClass="popular-models" />
      <ul className="popular-models__list">
        {popularModelsInfo.map((model, index) => (
          <li className="popular-models__item" key={`${model.modelName}-${index}`}>
            <p className="popular-models__model-name">{model.modelName}</p>
            <p className="popular-models__model-price">{model.modelPrice} &#8381;</p>
            <img src={model.imgPath} alt={`Модель часов ${model.modelName}`} className="popular-models__model-img" />
            <button className="popular-models__more-about-model" type="button" data-product-number={index}>Подробнее</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
