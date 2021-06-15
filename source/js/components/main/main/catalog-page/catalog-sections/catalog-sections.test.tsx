/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router-dom';

import CatalogSections from './catalog-sections';

describe('Testing <CatalogSections /> component', () => {
  test('Should change title after render', () => {
    render(<MemoryRouter><CatalogSections /></MemoryRouter>);
    expect(document.title).toBe('Наш каталог');
  });
});
