import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeFilter, resetFilter } from '../../../../../redux/actions/filters/filters';

import Filter from './filter/filter';
import ProductList from './product-list/product-list';
import Pagination from '../../../../universal-items/universal-blocks/navigation/pagination/pagination';

import usePaginationChange from '../../../../../custom-hooks/use-pagination-change';

import { MAX_PRODUCT_ON_PAGE } from '../../../../../variables/variables';

function FilterAndProduct({ productInfo, changeSomeFilter, resetAllFilters }) {
  const { currentPage, setCurrentPage, changePaginationNumber } = usePaginationChange(productInfo.length, MAX_PRODUCT_ON_PAGE);

  // Использую ref для хранения ссылки на product-list элемент.

  const refLinkToList = useRef(null);

  //

  return (
    <section className="filter-and-product">
      <h2 className="visually-hidden">Фильтры и товары</h2>
      <Filter changeSomeFilter={changeSomeFilter} resetAllFilters={resetAllFilters} />
      <ProductList productInfo={productInfo.slice((currentPage - 1) * MAX_PRODUCT_ON_PAGE, MAX_PRODUCT_ON_PAGE * currentPage)} linkToList={refLinkToList} />
      <Pagination maxProductOnPage={MAX_PRODUCT_ON_PAGE} productLength={productInfo.length} currentPage={currentPage} setCurrentPage={setCurrentPage} changePaginationNumber={changePaginationNumber} linkToList={refLinkToList} />
    </section>
  );
}

FilterAndProduct.propTypes = {
  productInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  changeSomeFilter: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

const mapDispatchToProps = {
  resetAllFilters: resetFilter,
  changeSomeFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAndProduct);
