/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { getAllByRole, getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserNavigation from './user-navigation';

describe('Testing <UserNavigation /> component', () => {
  beforeEach(() => {
    render(<UserNavigation isOpen />);
  });

  test('<nav> should have 1 <ul>', () => {
    expect(screen.getByRole('list'));
  });

  test('Should be at least 4 <li>', () => {
    const ul = screen.getByRole('list');
    expect(getAllByRole(ul, 'listitem')).toBeTruthy();
    expect(getAllByRole(ul, 'listitem')).toHaveLength(4);
  });

  test('In <li> should be link', () => {
    const ul = screen.getByRole('list');
    const liCollection = getAllByRole(ul, 'listitem');
    for (let i = 0, { length } = liCollection; i < length; i += 1) {
      expect(getByRole(liCollection[i], 'link')).toBeInTheDocument();
    }
  });
});
