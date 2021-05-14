import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchInput from '../../../../../source/js/components/main/header/search-input/search-input';

describe('Testing <SearchInput /> component', () => {
  beforeEach(() => {
    render(<SearchInput />);
  });

  test('Should successfully render a <SearchInput /> component', () => {
    expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
  });

  test('Change input value', () => {
    const someText = 'someText';
    const input = screen.getByPlaceholderText('Поиск...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: someText } });
    expect(input.value).toEqual(someText);
  });
});
