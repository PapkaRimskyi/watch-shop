import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import getSortType from '../../../../../redux/actions/get-sort-type/get-sort-type';

import SortBy from '../sort-by/sort-by';
import FilterAndProduct from '../filter-and-product/filter-and-product';

import watchInfo from './model/watch-item-info';

import sortProduct from '../../../../../utils/sort-product';
import { getActiveFiltersCollection, filterProducts } from '../../../../../utils/filter-products';

function WatchCatalog({ filters, catalogName, sortType, sortTypeChange }) {
  return (
    <section className="watch-catalog">
      <div className="watch-catalog__catalog-name-and-sort-type">
        <h1 className="headline watch-catalog__catalog-name">{catalogName}</h1>
        <SortBy popupClassName="sort-by__type-list" sortType={sortType} sortTypeChange={sortTypeChange} />
      </div>
      <FilterAndProduct productInfo={sortProduct.call(null, sortType, getActiveFiltersCollection(filters).length ? filterProducts(watchInfo, filters) : watchInfo)} />
    </section>
  );
}

WatchCatalog.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  catalogName: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  sortTypeChange: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    sortType: state.sortType,
    filters: state.filters,
  };
}

const mapDispatchToProps = {
  sortTypeChange: getSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchCatalog);
