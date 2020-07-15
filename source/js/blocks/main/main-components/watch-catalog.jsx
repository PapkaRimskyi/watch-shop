import React from 'react';

import SortBy from '../../utils/sort-by';

import Filter from '../../utils/filter';

export default class WatchCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.catalogName = 'Мужские часы';
  }

  render() {
    return (
      <section className="watch-catalog">
        <div className="watch-catalog__catalog-name-and-sort-type">
          <h1 className="headline watch-catalog__catalog-name">{this.catalogName}</h1>
          <SortBy />
        </div>
        <section className="filter-and-product">
          <h2 className="visually-hidden">Фильтр и товар</h2>
          <Filter />
        </section>
      </section>
    );
  }
}
