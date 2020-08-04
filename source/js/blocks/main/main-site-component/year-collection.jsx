import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../img/watch-example/watch_example.png';
import '../../../../img/decorative-elements/Ellipse.svg';

import SocialLinks from '../../universal-blocks/social-links';
import collectionInfo from './model/collection-info';

export default function YearCollection() {
  return (
    <section className="year-collection">
      <SocialLinks majorClass="year-collection" />
      <div className="year-collection__container">
        <h1 className="year-collection__collection-name">{collectionInfo.collectionName}</h1>
        <p className="year-collection__type">{collectionInfo.type}</p>
        <p className="year-collection__description">{collectionInfo.description}</p>
        <Link to="/catalog" className="button year-collection__see-catalog">Смотреть каталог</Link>
      </div>
      <div className="example-of-watch">
        <p className="example-of-watch__info example-of-watch__info--price">{collectionInfo.modelExamplePrice} &#8381;</p>
        <p className="example-of-watch__info example-of-watch__info--diameter">{collectionInfo.modelExampleDiameter}</p>
      </div>
    </section>
  );
}
