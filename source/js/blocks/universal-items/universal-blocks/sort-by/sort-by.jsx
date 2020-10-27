/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import usePopupSwitch from '../../../../custom-hooks/use-popup-switch';

import sortTypeList from './model/sort-type-list';

export default function SortBy({ sortType, sortTypeChange }) {
  // С помощью деструктуризации, вытаскиваем нужные элементы из объекта, который предоставляет нам usePopupSwitch.
  const { popupStatus, popupButtonHandler, keyDownHandler } = usePopupSwitch('sort-by__type-list');

  // Делегирование. Вешаю обработчик на ul. Определяю, произошел ли клик по тегу 'A' и если да, то запускаем функцию по смене типа сортировки, а так же функцию, которая закрывает менюшку.

  function optionsHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      sortTypeChange(e.target.textContent);
      popupButtonHandler(e);
    }
  }

  // Вешаю на input обработчики по клику и по keyDown.

  return (
    <section className="sort-by" aria-label="Варианты сортировки часов">
      <p className={`sort-by__type${classNames(popupStatus ? ' sort-by__type--active' : null)}`}>Сортировать по:
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
  sortTypeChange: PropTypes.func.isRequired,
};
