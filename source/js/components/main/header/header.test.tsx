/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Header from './header';

describe('Testing <Header /> component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('Should successfully render a <Header /> component', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('Change popupStatus must show <UserNavigation> component', () => {
    const burgerButton = screen.getByTitle('Бургерное меню');
    userEvent.click(burgerButton);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
