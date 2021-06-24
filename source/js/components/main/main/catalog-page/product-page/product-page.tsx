import React, { FC } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import DetailedProductCard from './detailed-product-card/detailed-product-card';

import data from './data/data';

const ProductPage: FC = () => {
  const test = 5;

  return (
    <>
      <Breadcrumbs />
      <DetailedProductCard data={data} />
    </>
  );
};

export default ProductPage;
