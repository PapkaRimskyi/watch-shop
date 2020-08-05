import React from 'react';

import Filter from '../../../../universal-items/universal-blocks/filter/filter';
import Pagination from '../../../../universal-items/universal-blocks/navigation/pagination/pagination';
import ProductList from '../../../../universal-items/universal-blocks/product-list/product-list';

export default function FilterAndProduct({ watchInfo, maxProductOnPage, productLength }) {
  return (
    <section className="filter-and-product">
      <Filter />
      <ProductList watchInfo={watchInfo} />
      <Pagination maxProductOnPage={maxProductOnPage} productLength={productLength} />
    </section>
  );
}
