import React, { FC } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import DetailedProductCard from './detailed-product-card/detailed-product-card';

const ProductPage: FC = () => {
  const test = 5;

  return (
    <>
      <Breadcrumbs />
      <DetailedProductCard />
    </>
  );
};

export default ProductPage;
