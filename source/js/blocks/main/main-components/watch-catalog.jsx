import React from 'react';

import SortBy from '../../utils/sort-by';

import Filter from '../../utils/filter';

import WatchList from './watch-list';

export default class WatchCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortType: 'популярности', sortTypeList: ['популярности', 'цене'] };

    this.catalogName = 'Мужские часы';

    this.sortTypeChange = this.sortTypeChange.bind(this);
  }

  sortTypeChange(sortName) {
    this.setState(() => ({ sortType: sortName }));
  }

  render() {
    const { sortType, sortTypeList } = this.state;
    return (
      <section className="watch-catalog">
        <div className="watch-catalog__catalog-name-and-sort-type">
          <h1 className="headline watch-catalog__catalog-name">{this.catalogName}</h1>
          <SortBy popupClassName="sort-by__type-list" sortType={sortType} sortTypeList={sortTypeList} sortTypeChange={this.sortTypeChange} />
        </div>
        <section className="filter-and-product">
          <h2 className="visually-hidden">Фильтр и товар</h2>
          <Filter />
          <WatchList />
        </section>
      </section>
    );
  }
}
