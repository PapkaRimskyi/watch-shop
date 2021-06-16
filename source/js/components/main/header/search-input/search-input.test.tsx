/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchInput from './search-input';

describe('Testing <SearchInput /> component', () => {
  beforeEach(() => {
    render(<SearchInput status />);
  });

  test('Input should have empty value by default', () => {
    expect((screen.getByPlaceholderText('Поиск...') as HTMLInputElement).value).toBe('');
  });

  test('Change input value', () => {
    const someText = 'someText';
    const input = screen.getByPlaceholderText('Поиск...') as HTMLInputElement;
    fireEvent.change(screen.getByPlaceholderText('Поиск...'), { target: { value: someText } });
    expect(input.value).toEqual(someText);
  });
});
