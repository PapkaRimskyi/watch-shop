import React from 'react';

import '../../../../../../img/accessories/band_1.png';
import '../../../../../../img/accessories/band_2.png';
import '../../../../../../img/accessories/band_3.png';

import ProductList from '../../../../universal-items/universal-blocks/product-list/product-list';
import WatchAllLink from '../../../../universal-items/universal-buttons/watch-all-link/watch-all-link';

import accessoriesInfo from '../model/accessories-info';

export default function Accessories() {
  return (
    <section className="accessories">
      <div className="accessories__section-name">
        <h2 className="headline accessorites__product-name">Ремешки</h2>
        <WatchAllLink href="/" majorClass="accessories" />
      </div>
      <ProductList watchInfo={accessoriesInfo} majorClass="accessories" />
    </section>
  );
}