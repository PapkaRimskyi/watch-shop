/* eslint-disable react/prop-types */
import React from 'react';

function sectionPage(productLength, maxProductOnPage) {
  const quantityOfPageArray = [];
  for (let i = 1; i <= Math.ceil(productLength / maxProductOnPage); i += 1) {
    quantityOfPageArray.push(i);
  }
  return quantityOfPageArray;
}

export default function Pagination(props) {
  const { maxProductOnPage, productLength } = props;
  if (productLength <= maxProductOnPage) {
    return null;
  }
  return (
    <div className="pagination">
      <button className="pagination__button pagination__button--prev" type="button" aria-label="Предыдущая страница">
        <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" /></svg>
      </button>
      <ul className="pagination__page-list">
        {sectionPage(productLength, maxProductOnPage).map((page) => (
          <li key={page} className="pagination__page-item">
            <a href=" " className="pagination__page-link">{page}</a>
          </li>
        ))}
      </ul>
      <button className="pagination__button pagination__button--next" type="button" aria-label="Следующая страница">
        <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" /></svg>
      </button>
    </div>
  );
}
