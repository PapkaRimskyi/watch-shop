import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SortBy from '../../../../universal-items/universal-blocks/sort-by/sort-by';
import FilterAndProduct from '../filter-and-product/filter-and-product';
import sortProduct from '../../../../../utils/sort-product';

import watchInfo from './model/watch-item-info';
import sortTypeList from './model/sort-type-list';

export default function WatchCatalog({ catalogName }) {
  const [sortType, setSortType] = useState('популярности');
  const MAX_PRODUCT_ON_PAGE = 12;

  function sortTypeChange(sortName) {
    setSortType(sortName);
  }

  return (
    <section className="watch-catalog">
      <div className="watch-catalog__catalog-name-and-sort-type">
        <h1 className="headline watch-catalog__catalog-name">{catalogName}</h1>
        <SortBy popupClassName="sort-by__type-list" sortType={sortType} sortTypeList={sortTypeList} sortTypeChange={sortTypeChange} />
      </div>
      <FilterAndProduct watchInfo={sortProduct.call(null, sortType, watchInfo)} maxProductOnPage={MAX_PRODUCT_ON_PAGE} productLength={watchInfo.length} />
    </section>
  );
}

WatchCatalog.propTypes = {
  catalogName: PropTypes.string.isRequired,
};
