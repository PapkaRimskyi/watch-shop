import React from 'react';
import PropTypes from 'prop-types';

import Filter from './filter/filter';
import Pagination from '../../../../universal-items/universal-blocks/navigation/pagination/pagination';
import ProductList from './product-list/product-list';

import usePaginationChange from '../../../../../custom-hooks/use-pagination-change';
import { MAX_PRODUCT_ON_PAGE } from '../../../../../variables/variables';

export default function FilterAndProduct({ productInfo, maxProductOnPage, productLength }) {
  const { currentPage, setCurrentPage, changePaginationNumber } = usePaginationChange(productInfo.length, MAX_PRODUCT_ON_PAGE);

  return (
    <section className="filter-and-product">
      <h2 className="visually-hidden">Фильтры и товары</h2>
      <Filter />
      <ProductList productInfo={productInfo.slice((currentPage - 1) * MAX_PRODUCT_ON_PAGE, MAX_PRODUCT_ON_PAGE * currentPage)} />
      <Pagination maxProductOnPage={maxProductOnPage} productLength={productLength} currentPage={currentPage} setCurrentPage={setCurrentPage} changePaginationNumber={changePaginationNumber} />
    </section>
  );
}

FilterAndProduct.propTypes = {
  productInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxProductOnPage: PropTypes.number.isRequired,
  productLength: PropTypes.number.isRequired,
};
