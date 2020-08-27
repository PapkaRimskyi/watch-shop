import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../../svg-icons/arrow';

function sectionPage(productLength, maxProductOnPage) {
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
      <button className="pagination__button pagination__button--prev" type="button" aria-label="Предыдущая страница">
        <Arrow />
      </button>
      <ul className="pagination__page-list" aria-label="Список страниц">
        {sectionPage(productLength, maxProductOnPage).map((page) => (
          <li key={page} className="pagination__page-item">
            <a href=" " className="pagination__page-link" aria-label={`Страница ${page}`}>{page}</a>
          </li>
        ))}
      </ul>
      <button className="pagination__button pagination__button--next" type="button" aria-label="Следующая страница">
        <Arrow />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  maxProductOnPage: PropTypes.number.isRequired,
  productLength: PropTypes.number.isRequired,
};
