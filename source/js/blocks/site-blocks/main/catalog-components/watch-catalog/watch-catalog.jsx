import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import getSortType from '../../../../../redux/actions/get-sort-type/get-sort-type';

import SortBy from '../sort-by/sort-by';
import FilterAndProduct from '../filter-and-product/filter-and-product';

import watchInfo from './model/watch-item-info';
import { MAX_PRODUCT_ON_PAGE } from '../../../../../variables/variables';

import sortProduct from '../../../../../utils/sort-product';

function WatchCatalog({ catalogName, sortType, sortTypeChange }) {
  return (
    <section className="watch-catalog">
      <div className="watch-catalog__catalog-name-and-sort-type">
        <h1 className="headline watch-catalog__catalog-name">{catalogName}</h1>
        <SortBy popupClassName="sort-by__type-list" sortType={sortType} sortTypeChange={sortTypeChange} />
      </div>
      <FilterAndProduct watchInfo={sortProduct.call(null, sortType, watchInfo)} maxProductOnPage={MAX_PRODUCT_ON_PAGE} productLength={watchInfo.length} />
    </section>
  );
}

WatchCatalog.propTypes = {
  catalogName: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  sortTypeChange: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    sortType: state.sortType,
  };
}

const mapDispatchToProps = {
  sortTypeChange: getSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchCatalog);
