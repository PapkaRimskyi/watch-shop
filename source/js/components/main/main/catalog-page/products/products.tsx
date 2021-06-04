import React, { FC } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import NameAndSort from './name-and-sort/name-and-sort';
import FilterAndProductList from './filter-and-product-list/filter-and-product-list';
import Discount from './discount/discount';

const Products: FC = () => (
  <section>
    <Breadcrumbs />
    <NameAndSort />
    <FilterAndProductList />
    <Discount />
  </section>
);

export default Products;
