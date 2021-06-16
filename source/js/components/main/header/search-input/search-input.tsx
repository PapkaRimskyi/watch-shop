import React, { FC, useEffect, useRef, useState } from 'react';

import InputField from './s-search-input';

const SearchInput: FC<{ status: boolean }> = ({ status }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  const changeInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <InputField ref={inputRef} type="text" placeholder="Поиск..." value={inputValue} onChange={changeInputValueHandler} status={status} />
  );
};

export default SearchInput;
