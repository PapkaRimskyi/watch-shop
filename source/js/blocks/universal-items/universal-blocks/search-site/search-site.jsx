import React, { useEffect } from 'react';

export default function SearchSite() {
  const searchRef = React.createRef();

  // После монтирования элемента, срабатывает useEffect и происходит фокус клавиатуры на поле с поиском для удобства.

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  //

  return (
    <input ref={searchRef} type="text" className="search-site" placeholder="Поиск по сайту" title="Поле для поиска по сайту" />
  );
}
