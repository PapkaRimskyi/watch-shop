/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchInput from './search-input';

describe('Testing <SearchInput /> component', () => {
  let input: HTMLInputElement;
  beforeEach(() => {
    const { getByRole } = render(<SearchInput />);
    input = getByRole('textbox') as HTMLInputElement;
  });

  test('Input should have empty value by default', () => {
    expect(input.value).toEqual('');
  });

  test('Change input value', () => {
    const someText = 'someText';
    fireEvent.change(input, { target: { value: someText } });
    expect(input.value).toEqual(someText);
  });
});
