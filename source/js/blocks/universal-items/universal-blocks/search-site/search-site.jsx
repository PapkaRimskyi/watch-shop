import React, { useEffect } from 'react';

export default function SearchSite() {
  const searchRef = React.createRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <input ref={searchRef} type="text" className="search-site" placeholder="Поиск по сайту" title="Поле для поиска по сайту" />
  );
}
