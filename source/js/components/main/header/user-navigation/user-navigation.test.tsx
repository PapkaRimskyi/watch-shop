/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserNavigation from './user-navigation';

import data from './data/data';

describe('Testing <UserNavigation /> component', () => {
  test('Should have link with certain text inside', () => {
    const { getByRole } = render(<UserNavigation isOpen />);
    for (let i = 0, { length } = data; i < length; i += 1) {
      expect(getByRole('link', { name: data[i].name })).toBeInTheDocument();
    }
  });
});
