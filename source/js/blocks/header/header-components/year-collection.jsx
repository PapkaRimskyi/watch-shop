import React from 'react';

import '../../../../img/watch_example.png';
import '../../../../img/Ellipse.svg';

import SocialLinks from '../../utils/social-links';

export default function YearCollection() {
  const majorClass = 'year-collection';
  const collectionInfo = {
    collectionName: 'Весна/Лето 2019',
    type: 'Коллекция',
    description: 'Швейцарские часы в наличии в Москве и с доставкой по всему миру',
    modelExamplePrice: '22 000',
    modelExampleDiameter: '28 мм диаметр',
  };
  return (
    <section className="year-collection">
      <SocialLinks majorClass={majorClass} />
      <div className="year-collection__container">
        <h1 className="year-collection__collection-name">{collectionInfo.collectionName}</h1>
        <p className="year-collection__type">{collectionInfo.type}</p>
        <p className="year-collection__description">{collectionInfo.description}</p>
        <button className="button year-collection__see-catalog" type="button">Смотреть каталог</button>
      </div>
      <div className="example-of-watch">
        <p className="example-of-watch__info example-of-watch__info--price">{collectionInfo.modelExamplePrice} &#8381;</p>
        <p className="example-of-watch__info example-of-watch__info--diameter">{collectionInfo.modelExampleDiameter}</p>
      </div>
    </section>
  );
}
