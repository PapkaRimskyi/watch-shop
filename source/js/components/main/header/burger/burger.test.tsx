/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Burger from './burger';

describe('Testing <Burger /> component', () => {
  const state = { isOpen: false };
  const changeStateImplement = () => {
    state.isOpen = !state.isOpen;
  };
  const mockFunc = jest.fn(changeStateImplement);

  beforeEach(() => {
    render(<Burger changePopupStatus={mockFunc} />);
  });

  test('Should successfully render a <Burger /> component', () => {
    expect(screen.getByTitle('Бургерное меню')).toBeInTheDocument();
  });

  test('Change state after click on burger button', () => {
    const burgerButton = screen.getByTitle('Бургерное меню');
    userEvent.click(burgerButton);

    expect(state.isOpen).toBeTruthy();
    expect(mockFunc).toHaveBeenCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
