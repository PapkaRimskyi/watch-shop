import React, { FC, useEffect, useRef, useState } from 'react';

import InputField from './s-search-input';

import ISearchInput from './interface';

const SearchInput: FC<ISearchInput> = ({ status }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Фокус на инпут при первичном монтировании

  useEffect(() => {
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  //

  // Слушаю изменения в input'е при вводе пользователем

  const changeInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  //

  return (
    <InputField ref={inputRef} type="text" placeholder="Поиск..." value={inputValue} onChange={changeInputValueHandler} status={status} />
  );
};

export default SearchInput;
