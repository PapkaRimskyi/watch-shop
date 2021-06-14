/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router-dom';

import Breadcrumbs from './breadcrumbs';

describe('Testing <Breadcrumbs> component', () => {
  test('Should render chain path with a certain length', () => {
    const lengthOfChainPath = 3;
    render(
      <MemoryRouter initialEntries={['/catalog/men-watch']}>
        <Breadcrumbs />
      </MemoryRouter>,
    );
    expect(screen.getByRole('list').children).toHaveLength(lengthOfChainPath);
  });

  test('In case, when path does not exist in app-route list, chain will be name "Route not found"', () => {
    render(
      <MemoryRouter initialEntries={['/catalog/somepath']}>
        <Breadcrumbs />
      </MemoryRouter>,
    );
    expect(screen.getByText('Route not found')).toBeInTheDocument();
  });
});
