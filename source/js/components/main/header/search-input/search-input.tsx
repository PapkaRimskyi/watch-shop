import React, { ChangeEvent, useState } from 'react';

import InputField from './s-search-input';

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <InputField type="text" placeholder="Поиск..." value={inputValue} onChange={changeInputValueHandler} />
  );
};

export default SearchInput;
