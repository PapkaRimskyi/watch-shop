/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { getAllByRole, getByRole, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popular from './popular';

import data from './data/data';

describe('Testing <Popular /> component', () => {
  beforeEach(() => {
    render(<Popular />);
  });

  test('Should have <h2> tag', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('Should have <a> with text "Смотреть все"', () => {
    expect(screen.getByText('Смотреть все')).toBeInTheDocument();
  });

  test('Should have <ul>', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('<ul> should have at least 4 <li> inside', () => {
    const ul = screen.getByRole('list');
    expect(getAllByRole(ul, 'listitem')).toBeTruthy();
    expect(getAllByRole(ul, 'listitem')).toHaveLength(4);
  });

  test('Each <li> should contain 2 <p> (product name and price), 1 <img> with product image and 1 <a> with text "Подробнее"', () => {
    const ul = screen.getByRole('list');
    const liCollection = getAllByRole(ul, 'listitem');
    for (let i = 0, { length } = liCollection; i < length; i += 1) {
      const { productName, productPrice } = data[i];
      expect(getByText(liCollection[i], `${productName.toUpperCase()}`));
      expect(getByText(liCollection[i], `${productPrice}`));

      expect(getByRole(liCollection[i], 'img')).toBeInTheDocument();

      expect(getByRole(liCollection[i], 'link'));
      expect(getByText(liCollection[i], 'Подробнее'));
    }
  });
});
