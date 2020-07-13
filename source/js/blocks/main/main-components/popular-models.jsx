/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../img/watch-example/popular-watch-1.png';
import '../../../../img/watch-example/popular-watch-2.png';
import '../../../../img/watch-example/popular-watch-3.png';
import '../../../../img/watch-example/popular-watch-4.png';

export default class PopularModels extends React.Component {
  constructor(props) {
    super(props);

    this.popularModelsInfo = [
      {
        modelName: 'Rado',
        modelPrice: '65 300',
        imgPath: 'assets/img/popular-watch-1.png',
      },
      {
        modelName: 'Rado',
        modelPrice: '65 300',
        imgPath: 'assets/img/popular-watch-2.png',
      },
      {
        modelName: 'Bvlgari',
        modelPrice: '81 700',
        imgPath: 'assets/img/popular-watch-3.png',
      },
      {
        modelName: 'Bvlgari',
        modelPrice: '72 700',
        imgPath: 'assets/img/popular-watch-4.png',
      },
    ];
  }

  render() {
    return (
      <section className="popular-models">
        <h2 className="headline popular-models__headline">Популярные модели</h2>
        <Link to="/catalog" className="popular-models__watch-all" type="button">Смотреть все</Link>
        <ul className="popular-models__list">
          {this.popularModelsInfo.map((model, index) => (
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
}
