/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SocialLinks from './social-links';

describe('Testing <SocialLinks /> component', () => {
  beforeEach(() => {
    render(<SocialLinks />);
  });

  test('Component should have <ul> tag', () => {
    expect(screen.getByRole('list', { hidden: true })).toBeInTheDocument();
  });

  test('<ul> tag should have 3 <li> inside', () => {
    expect(screen.getAllByRole('listitem', { hidden: true })).toBeTruthy();
    expect(screen.getAllByRole('listitem', { hidden: true })).toHaveLength(3);
  });

  test('Each <li> should have 1 link inside', () => {
    const liCollection = screen.getAllByRole('listitem', { hidden: true });
    for (let i = 0, { length } = liCollection; i < length; i += 1) {
      expect(getByRole(liCollection[i], 'link', { hidden: true })).toBeInTheDocument();
    }
  });
});
