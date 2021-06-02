import React, { FC } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import NameAndSort from './name-and-sort/name-and-sort';
import FilterAndProductList from './filter-and-product-list/filter-and-product-list';

import Section from './s-products';

const Product: FC = () => (
  <Section>
    <Breadcrumbs />
    <NameAndSort />
    <FilterAndProductList />
  </Section>
);

export default Product;
