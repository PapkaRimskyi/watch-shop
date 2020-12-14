import React from 'react';
import PropTypes from 'prop-types';

import FilterFieldset from './filter-fieldset/filter-fieldset';
import filterData from './model/filter-data';

import '../../../../../../../img/unique-icon/check-mark.svg';

export default function Filter({ changeSomeFilter, resetAllFilters }) {
  return (
    <section className="filter">
      <h2 className="visually-hidden">Раздел с фильтрами</h2>
      <form className="filter__form" aria-label="Фильтр товаров">
        {filterData.map((info) => <FilterFieldset key={info.filterName} info={info} changeSomeFilter={changeSomeFilter} />)}
        <button className="filter__button-drop-option" type="reset" onClick={resetAllFilters}>Сбросить фильтр</button>
      </form>
    </section>
  );
}

Filter.propTypes = {
  resetAllFilters: PropTypes.func.isRequired,
  changeSomeFilter: PropTypes.func.isRequired,
};
