import React from 'react';
import PropTypes from 'prop-types';

import Filter from './filter/filter';
import Pagination from '../../../../universal-items/universal-blocks/navigation/pagination/pagination';
import ProductList from './product-list/product-list';

export default function FilterAndProduct({ watchInfo, maxProductOnPage, productLength }) {
  return (
    <section className="filter-and-product">
      <Filter />
      <ProductList watchInfo={watchInfo} />
      <Pagination maxProductOnPage={maxProductOnPage} productLength={productLength} />
    </section>
  );
}

FilterAndProduct.propTypes = {
  watchInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxProductOnPage: PropTypes.number.isRequired,
  productLength: PropTypes.number.isRequired,
};
