import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import RangeCost from './range-cost/range-cost';
import FilterList from './filter-list/filter-list';

export default function FilterFieldset({ info, changeSomeFilter }) {
  const [menuStatus, setMenuStatus] = useState(true);
  const { ariaLabel, filterName } = info;

  // Обработчик по клику

  function menuClickHandler() {
    setMenuStatus((prevState) => !prevState);
  }

  //

  // Слушатель на кнопку Enter.

  function menuKeyHandler(e) {
    if (e.key === 'Enter') {
      menuClickHandler();
    }
  }

  //

  return (
    <fieldset className="filter__fieldset">
      <legend
        className={`filter__legend${classNames(menuStatus ? ' filter__legend--active' : null)}`}
        aria-label={ariaLabel}
        onKeyPress={menuKeyHandler}
        onClick={menuClickHandler}
        tabIndex="0"
        role="presentation"
      >
        {filterName}
      </legend>
      <CSSTransition in={menuStatus} timeout={300} classNames="scale-block">
        {filterName === 'Стоимость'
          ? <RangeCost menuStatus={menuStatus} />
          : <FilterList options={info.options} inputType={info.inputType} changeSomeFilter={changeSomeFilter} />}
      </CSSTransition>
    </fieldset>
  );
}

FilterFieldset.propTypes = {
  info: PropTypes.shape({
    filterName: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  changeSomeFilter: PropTypes.func.isRequired,
};
