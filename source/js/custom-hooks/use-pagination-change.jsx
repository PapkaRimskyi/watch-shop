import { useState } from 'react';

export default function usePaginationChange(productLength, maxProductOnPage) {
  const [currentPage, setCurrentPage] = useState(1);

  function changePaginationNumber(e) {
    e.preventDefault();
    const classListString = e.currentTarget.classList.value;
    if (classListString.includes('--left')) {
      if (currentPage - 1 !== 0) {
        setCurrentPage(currentPage - 1);
      }
    } else if (classListString.includes('--right')) {
      if (currentPage + 1 <= Math.ceil(productLength / maxProductOnPage)) {
        setCurrentPage(currentPage + 1);
      }
    }
    window.scrollTo(0, 0);
  }

  return { currentPage, setCurrentPage, changePaginationNumber };
}
