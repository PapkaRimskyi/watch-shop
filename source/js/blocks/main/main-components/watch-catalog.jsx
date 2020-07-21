import React from 'react';

import SortBy from '../../utils/sort-by';
import Filter from '../../utils/filter';
import WatchList from './watch-list';
import Pagination from '../../utils/pagination';

export default class WatchCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortType: 'популярности', sortTypeList: ['популярности', 'цене'] };

    this.catalogName = 'Мужские часы';

    this.maxProductOnPage = 12;

    this.watchInfo = [
      {
        brandName: 'techne',
        price: '12 700',
        mechType: 'Механические',
        material: 'Сталь',
        color: 'Белый',
        imgPath: 'assets/img/watch_1.png',
      },
      {
        brandName: 'techne',
        price: '12 700',
        mechType: 'Механические',
        material: 'Сталь',
        color: 'Чёрный',
        imgPath: 'assets/img/watch_2.png',
      },
      {
        brandName: 'techne',
        price: '15 700',
        mechType: 'Механические',
        material: 'Сталь',
        color: 'Чёрный',
        imgPath: 'assets/img/watch_3.png',
      },
      {
        brandName: 'techne',
        price: '15 700',
        mechType: 'Механические',
        material: 'Сталь',
        color: 'Белый',
        imgPath: 'assets/img/watch_4.png',
      },
      {
        brandName: 'techne',
        price: '12 700',
        mechType: 'Механические',
        material: 'Сталь',
        color: 'Чёрный',
        imgPath: 'assets/img/watch_5.png',
      },
      {
        brandName: 'techne',
        price: '18 500',
        mechType: 'Механические',
        material: 'Титан',
        color: 'Белый',
        imgPath: 'assets/img/watch_6.png',
      },
      {
        brandName: 'techne',
        price: '15700',
        mechType: 'Механические',
        material: 'Титан',
        color: 'Белый',
        imgPath: 'assets/img/watch_7.png',
      },
      {
        brandName: 'rado',
        price: '14 700',
        mechType: 'Кварцевые',
        material: 'Сталь',
        color: 'Белый',
        imgPath: 'assets/img/watch_8.png',
      },
      {
        brandName: 'bvlgari',
        price: '72 700',
        mechType: 'Механические',
        material: 'Титан',
        color: 'Белый',
        imgPath: 'assets/img/watch_9.png',
      },
      {
        brandName: 'techne',
        price: '22 700',
        mechType: 'Кварцевые',
        material: 'Сталь',
        color: 'Белый',
        imgPath: 'assets/img/watch_10.png',
      },
      {
        brandName: 'rado',
        price: '22 000',
        mechType: 'Кварцевые',
        material: 'Сталь',
        color: 'Белый',
        imgPath: 'assets/img/watch_11.png',
      },
    ];

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
          <WatchList watchInfo={this.watchInfo} />
          <Pagination maxProductOnPage={this.maxProductOnPage} productLength={this.watchInfo.length} />
        </section>
      </section>
    );
  }
}
