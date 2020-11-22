import React from 'react';
import { Link } from 'react-router-dom';

import SocialLinks from '../../../../universal-items/universal-blocks/social-links/social-links';
import ExampleOfWatch from './example-of-watch/example-of-watch';

import yearCollectionInfo from './model/year-collection-info';

import '../../../../../../img/watch-example/watch_example.png';
import '../../../../../../img/decorative-elements/Ellipse.svg';

export default function YearCollection() {
  return (
    <section className="year-collection">
      <h2 className="visually-hidden">Коллекция часов</h2>
      <SocialLinks majorClass="year-collection" />
      <div className="year-collection__container">
        <h1 className="year-collection__collection-name">{yearCollectionInfo.collectionName}</h1>
        <p className="year-collection__type">{yearCollectionInfo.type}</p>
        <p className="year-collection__description">{yearCollectionInfo.description}</p>
        <Link to="/catalog/mens-watch" className="button year-collection__see-catalog">Смотреть каталог</Link>
      </div>
      <ExampleOfWatch modelExamplePrice={yearCollectionInfo.modelExamplePrice} modelExampleDiameter={yearCollectionInfo.modelExampleDiameter} />
    </section>
  );
}
