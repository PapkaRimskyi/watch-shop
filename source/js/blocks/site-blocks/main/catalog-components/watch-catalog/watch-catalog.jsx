import React from 'react';

import SortBy from '../../../../universal-items/universal-blocks/sort-by/sort-by';
import FilterAndProduct from '../filter-and-product/filter-and-product';
import sortProduct from '../../../../../utils/sort-product';

import watchInfo from '../model/watch-item-info';

export default class WatchCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortType: 'популярности', sortTypeList: ['популярности', 'цене'] };

    this.maxProductOnPage = 12;

    this.sortTypeChange = this.sortTypeChange.bind(this);
  }

  sortTypeChange(sortName) {
    this.setState(() => ({ sortType: sortName }));
  }

  render() {
    const { sortType, sortTypeList } = this.state;
    const { catalogName } = this.props;
    return (
      <section className="watch-catalog">
        <div className="watch-catalog__catalog-name-and-sort-type">
          <h1 className="headline watch-catalog__catalog-name">{catalogName}</h1>
          <SortBy popupClassName="sort-by__type-list" sortType={sortType} sortTypeList={sortTypeList} sortTypeChange={this.sortTypeChange} />
        </div>
        <FilterAndProduct watchInfo={sortProduct.call(this, watchInfo)} maxProductOnPage={this.maxProductOnPage} productLength={watchInfo.length} />
      </section>
    );
  }
}
