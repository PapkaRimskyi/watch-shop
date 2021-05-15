/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Collection from './collection';

describe('Testing <Collection /> component', () => {
  beforeEach(() => {
    render(<Collection />);
  });

  test('Should have link to catalog page', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Should have 1 paragraph about collection', () => {
    expect(screen.getByText('Швейцарские часы', { exact: false })).toBeInTheDocument();
  });

  test('Should have 1 image, which present product', () => {
    expect(screen.getByAltText('Пример часов из коллекции')).toBeInTheDocument();
  });
});
