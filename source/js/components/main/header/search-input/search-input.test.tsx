/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchInput from './search-input';

describe('Testing <SearchInput /> component', () => {
  beforeEach(() => {
    render(<SearchInput />);
  });

  test('Input should have empty value by default', () => {
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  test('Change input value', async () => {
    const someText = 'someText';
    fireEvent.change(screen.getByDisplayValue(''), { target: { value: someText } });
    const input = await screen.findByDisplayValue(`${someText}`) as HTMLInputElement;
    expect(input.value).toEqual(someText);
  });
});
