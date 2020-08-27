import React from 'react';
import { Link } from 'react-router-dom';

import SocialLinks from '../../../../universal-items/universal-blocks/social-links/social-links';
import ExampleOfWatch from '../example-of-watch/example-of-watch';

import collectionInfo from '../model/collection-info';

import '../../../../../../img/watch-example/watch_example.png';
import '../../../../../../img/decorative-elements/Ellipse.svg';

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
      <ExampleOfWatch modelExamplePrice={collectionInfo.modelExamplePrice} modelExampleDiameter={collectionInfo.modelExampleDiameter} />
    </section>
  );
}
