/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArrowButton from '../../../universal-buttons/arrow-button/arrow-button';

import elementCoords from '../../../../../utils/element-coords';

function sectionPage(maxProductOnPage, productLength) {
  const quantityOfPageArray = [];
  for (let i = 1; i <= Math.ceil(productLength / maxProductOnPage); i += 1) {
    quantityOfPageArray.push(i);
  }
  return quantityOfPageArray;
}

export default function Pagination({ maxProductOnPage, productLength, currentPage, setCurrentPage, changePaginationNumber, linkToList }) {
  // При клике на кнопку страницы, происходит перемотка наверх и меняется текущая страница с товарами.

  function pageButtonHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      const { top, left } = elementCoords(linkToList.current);
      window.scrollTo(top, left);
      setCurrentPage(+e.target.textContent);
    }
  }

  //

  return productLength <= maxProductOnPage
    ? null
    : (
      <div className="pagination">
        <ArrowButton majorClass="arrow-button pagination__button pagination__button--left" arrowsHandler={changePaginationNumber} ariaLabel="Предыдущая страница" disabledStatus={currentPage === 1} />
        <ul className="pagination__page-list" aria-label="Список страниц" onClick={pageButtonHandler}>
          {sectionPage(maxProductOnPage, productLength).map((page) => (
            <li key={page} className="pagination__page-item">
              <button className={`pagination__page-link${classNames(page === currentPage ? ' pagination__page-link--active' : null)}`} aria-label={page === currentPage ? `Текущая страница: ${currentPage}` : `На страницу ${page}`} type="button">{page}</button>
            </li>
          ))}
        </ul>
        <ArrowButton majorClass="arrow-button pagination__button pagination__button--right" arrowsHandler={changePaginationNumber} ariaLabel="Следующая страница" disabledStatus={currentPage === Math.ceil(productLength / maxProductOnPage)} />
      </div>
    );
}

Pagination.propTypes = {
  maxProductOnPage: PropTypes.number.isRequired,
  productLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  changePaginationNumber: PropTypes.func.isRequired,
  linkToList: PropTypes.objectOf(PropTypes.object),
};

Pagination.defaultProps = {
  linkToList: null,
};
