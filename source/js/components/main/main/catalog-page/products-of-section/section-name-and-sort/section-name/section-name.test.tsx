/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import SectionName from './section-name';

import appRoute from '../../../../../../../app-route/app-route';

describe('Testing <Name /> component', () => {
  test('Should write right section catalog name', () => {
    const filteredRouteListByType = appRoute.filter((path) => path.type === 'Catalog subroute');
    const randomSectionNumber = Math.round(Math.random() * ((filteredRouteListByType.length - 1) - 0) + 0);
    render(<MemoryRouter initialEntries={[{ pathname: `/catalog/${filteredRouteListByType[randomSectionNumber].route}` }]}><SectionName /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual(`${filteredRouteListByType[randomSectionNumber].localization}`);
  });

  test('Should return reserve string for unknown section catalog name', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/catalog/auto' }]}><SectionName /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual('Раздел не определён');
  });
});
