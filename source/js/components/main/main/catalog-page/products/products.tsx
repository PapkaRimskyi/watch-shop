import React, { FC } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import NameAndSort from './name-and-sort/name-and-sort';
import FilterAndProductList from './filter-and-product-list/filter-and-product-list';
import Discount from './discount/discount';
import AdditionalProducts from './additional-products/additional-products';

const Products: FC = () => (
  <section>
    <Breadcrumbs />
    <NameAndSort />
    <FilterAndProductList />
    <Discount />
    <AdditionalProducts />
  </section>
);

export default Products;
