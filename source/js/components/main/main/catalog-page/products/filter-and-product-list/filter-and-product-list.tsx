import React, { FC } from 'react';

import Filter from './filter/filter';

import Container from './s-filter-and-product-list';

const FilterAndProductList: FC = () => (
  <Container>
    <Filter />
  </Container>
);

export default FilterAndProductList;
