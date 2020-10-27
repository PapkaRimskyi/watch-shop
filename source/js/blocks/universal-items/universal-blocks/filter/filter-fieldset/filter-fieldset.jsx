import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RangeCost from '../range-cost/range-cost';

export default function FilterFieldset({ info }) {
  const [menuStatus, setMenuStatus] = useState(info.menuStatus);
  const { ariaLabel, filterName } = info;

  // Обработчик по клику

  function menuClickHandler() {
    setMenuStatus((prevState) => !prevState);
  }

  // Слушатель на кнопку Enter.

  function menuKeyHandler(e) {
    if (e.key === 'Enter') {
      menuClickHandler();
    }
  }

  return (
    <fieldset className="filter__fieldset">
      <legend
        className={classNames('filter__legend', `filter__legend--${menuStatus ? 'active' : 'closed'}`)}
        aria-label={ariaLabel}
        onKeyPress={menuKeyHandler}
        onClick={menuClickHandler}
        tabIndex="0"
        role="presentation"
      >{filterName}
      </legend>
      {filterName === 'Стоимость' ? <RangeCost menuStatus={menuStatus} /> : (
        <ul className={classNames('filter__option-list', !menuStatus ? 'filter__option-list--closed' : null)}>
          {info.options.map((option) => (
            <li className="filter__checkbox-option" key={option}>
              <input type="checkbox" className="filter__checkbox-input visually-hidden" name={option} id={option} />
              <label htmlFor={option} className="filter__checkbox-label">{option}</label>
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}

FilterFieldset.propTypes = {
  info: PropTypes.shape({
    menuStatus: PropTypes.bool.isRequired,
    filterName: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
