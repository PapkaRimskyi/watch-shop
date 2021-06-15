/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter, Route } from 'react-router-dom';

import Products from './products';

describe('Testing <Products /> component', () => {
  beforeEach(() => {
    document.title = 'test';
  });

  test('After mounting component should change document.title', () => {
    render(<MemoryRouter initialEntries={['/catalog/men-watch']}><Route path="/catalog/men-watch" component={Products} /></MemoryRouter>);
    expect(document.title).toBe('Мужские часы');
  });
});
