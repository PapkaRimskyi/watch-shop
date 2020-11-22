import React from 'react';
import PropTypes from 'prop-types';

import ArrowButton from '../../../universal-buttons/arrow-button/arrow-button';

function sectionPage(maxProductOnPage, productLength) {
  const quantityOfPageArray = [];
  for (let i = 1; i <= Math.ceil(productLength / maxProductOnPage); i += 1) {
    quantityOfPageArray.push(i);
  }
  return quantityOfPageArray;
}

export default function Pagination({ maxProductOnPage, productLength }) {
  if (productLength <= maxProductOnPage) {
    return null;
  }
  return (
    <div className="pagination">
      <ArrowButton majorClass="arrow-button pagination__button pagination__button--left" ariaLabel="Предыдущая страница" />
      <ul className="pagination__page-list" aria-label="Список страниц">
        {sectionPage(maxProductOnPage, productLength).map((page) => (
          <li key={page} className="pagination__page-item">
            <a href=" " className="pagination__page-link" aria-label={`Страница ${page}`}>{page}</a>
          </li>
        ))}
      </ul>
      <ArrowButton majorClass="arrow-button pagination__button pagination__button--right" ariaLabel="Следующая страница" />
    </div>
  );
}

Pagination.propTypes = {
  maxProductOnPage: PropTypes.number.isRequired,
  productLength: PropTypes.number.isRequired,
};
