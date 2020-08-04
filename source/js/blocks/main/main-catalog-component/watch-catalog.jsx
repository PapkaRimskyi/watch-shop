import React from 'react';

import SortBy from '../../universal-blocks/sort-by';
import Filter from '../../universal-blocks/filter-blocks/filter';
import WatchList from './watch-list';
import Pagination from '../../universal-blocks/navigation-blocks/pagination';
import sortProduct from '../../utils/sort-product';

import watchInfo from './model/watch-item-info';

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
        <section className="filter-and-product">
          <h2 className="visually-hidden">Фильтр и товар</h2>
          <Filter />
          <WatchList watchInfo={sortProduct.call(this, watchInfo)} />
          <Pagination maxProductOnPage={this.maxProductOnPage} productLength={watchInfo.length} />
        </section>
      </section>
    );
  }
}
