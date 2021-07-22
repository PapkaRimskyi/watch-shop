import React, { FC } from 'react';

import Filter from './filter/filter';
import ProductList from './product-list/product-list';

import Container from './s-filter-and-product-list';

import data from './product-list/data/data';

const FilterAndProductList: FC = () => (
  <Container>
    <Filter />
    <ProductList renderData={data} />
  </Container>
);

export default FilterAndProductList;
