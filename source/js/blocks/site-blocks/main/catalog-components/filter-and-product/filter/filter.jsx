import React from 'react';

import FilterFieldset from './filter-fieldset/filter-fieldset';
import filterData from './model/filter-data';

import '../../../../../../../img/unique-icon/check-mark.svg';

export default function Filter() {
  return (
    <section className="filter">
      <h2 className="visually-hidden">Раздел с фильтрами</h2>
      <form className="filter__form" aria-label="Фильтр товаров">
        {filterData.map((info) => <FilterFieldset key={info.filterName} info={info} />)}
        <button className="filter__button-drop-option" type="reset">Сбросить фильтр</button>
      </form>
    </section>
  );
}
