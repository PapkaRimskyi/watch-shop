/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Header from './header';

describe('Testing <Header /> component', () => {
  test('Change popupStatus must show <UserNavigation> component', () => {
    const { getByTitle, getByRole } = render(<Header />);
    const burgerButton = getByTitle('Бургерное меню');
    userEvent.click(burgerButton);
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
