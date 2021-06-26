import React, { FC } from 'react';

import Filter from './filter/filter';
import ProductList from './product-list/product-list';

import Container from './s-filter-and-product-list';

import data from './product-list/data/data';

import '../../../../../../../img/watch-list/watch_1.png';
import '../../../../../../../img/watch-list/watch_2.png';
import '../../../../../../../img/watch-list/watch_3.png';
import '../../../../../../../img/watch-list/watch_4.png';
import '../../../../../../../img/watch-list/watch_5.png';
import '../../../../../../../img/watch-list/watch_6.png';
import '../../../../../../../img/watch-list/watch_7.png';
import '../../../../../../../img/watch-list/watch_8.png';
import '../../../../../../../img/watch-list/watch_9.png';
import '../../../../../../../img/watch-list/watch_10.png';
import '../../../../../../../img/watch-list/watch_11.png';
import '../../../../../../../img/watch-list/watch_12.png';

const FilterAndProductList: FC = () => (
  <Container>
    <Filter />
    <ProductList renderData={data} />
  </Container>
);

export default FilterAndProductList;
