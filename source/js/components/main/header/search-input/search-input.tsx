import React, { FC, useState } from 'react';

import InputField from './s-search-input';

const SearchInput: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <InputField type="text" placeholder="Поиск..." value={inputValue} onChange={changeInputValueHandler} />
  );
};

export default SearchInput;
