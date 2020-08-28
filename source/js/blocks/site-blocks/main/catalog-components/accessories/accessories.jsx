import React, { useState } from 'react';
import useCarousel from '../../../../../custom-hooks/use-carousel';
import useItemShift from '../../../../../custom-hooks/use-item-shift';

import ProductList from '../../../../universal-items/universal-blocks/product-list/product-list';
import WatchAllLink from '../../../../universal-items/universal-buttons/watch-all-link/watch-all-link';
import ArrowButton from '../../../../universal-items/universal-buttons/arrow-button/arrow-button';

import accessoriesInfo from './model/accessories-info';

import '../../../../../../img/accessories/band_1.png';
import '../../../../../../img/accessories/band_2.png';
import '../../../../../../img/accessories/band_3.png';

export default function Accessories() {
  const [productList, setProductList] = useState(accessoriesInfo);
  const carouselHandler = useCarousel(useItemShift(productList, setProductList));

  return (
    <section className="accessories">
      <div className="accessories__section-name">
        <h2 className="headline accessorites__product-name">Ремешки</h2>
        <WatchAllLink href="/" majorClass="accessories" />
      </div>
      <div className="accessories__container">
        <ArrowButton majorClass="accessories__slide-button accessories__slide-button--left" ariaLabel="Предыдущий слайд" arrowsHandler={carouselHandler} />
        <ProductList watchInfo={productList} majorClass="accessories" />
        <ArrowButton majorClass="accessories__slide-button accessories__slide-button--right" ariaLabel="Следующий слайд" arrowsHandler={carouselHandler} />
      </div>
    </section>
  );
}
