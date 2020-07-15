import React from 'react';
import FilterFieldset from './filter-fieldset';

import '../../../img/unique-icon/check-mark.svg';

export default function Filter() {
  const filterData = [
    {
      menuStatus: true,
      filterName: 'Стоимость',
      ariaLabel: 'Диапазон цены',
    },
    {
      menuStatus: true,
      filterName: 'Бренд',
      ariaLabel: 'Список брендов',
      options: ['Techne', 'Rado', 'Bvlgari', 'Tissot', 'Omega', 'Montblanc'],
    },
    {
      menuStatus: false,
      filterName: 'Механизм',
      ariaLabel: 'Список типов механизма',
      options: ['Механические', 'Электронные', 'Кварцевые'],
    },
    {
      menuStatus: false,
      filterName: 'Материал',
      ariaLabel: 'Список материалов',
      options: ['Сталь', 'Титан'],
    },
    {
      menuStatus: false,
      filterName: 'Цвет',
      ariaLabel: 'Список цветов',
      options: ['Белый', 'Чёрный'],
    },
  ];
  return (
    <section className="filter">
      <h2 className="visually-hidden">Фильтр товара</h2>
      <form className="filter__form">
        {filterData.map((info) => <FilterFieldset key={info.filterName} info={info} />)}
        <button className="filter__button-drop-option" type="reset">Сбросить фильтр</button>
      </form>
    </section>
  );
}
