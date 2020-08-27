/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import usePopupSwitch from '../../../../custom-hooks/use-popup-switch';

export default function SortBy({ sortType, sortTypeList, sortTypeChange }) {
  const { popupStatus, popupButtonHandler, keyDownHandler } = usePopupSwitch('sort-by__type-list');

  function optionsHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      sortTypeChange(e.target.textContent);
      popupButtonHandler(e);
    }
  }

  return (
    <section className="sort-by" aria-label="Варианты сортировки часов">
      <p className={`sort-by__type ${classNames(popupStatus ? 'sort-by__type--active' : false)}`}>Сортировать по:
        <input type="text" className="sort-by__active-type" aria-label={`Текущая сортировка: по ${sortType}`} onClick={popupButtonHandler} onKeyDown={keyDownHandler} name="active-sort-type" value={sortType} readOnly />
      </p>
      {popupStatus ? (
        <ul className="sort-by__type-list" aria-label="Список доступных сортировок" onClick={optionsHandler}>
          {sortTypeList.map((type) => (
            <li key={type} className="sort-by__type-element">
              <a href="  " className="sort-by__type-link" aria-label={`Сортировка по ${type}`}>{type}</a>
            </li>
          ))}
        </ul>
      )
        : null}
    </section>
  );
}

SortBy.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortTypeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortTypeChange: PropTypes.func.isRequired,
};
