/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import UserPanel from './user-panel';

describe('Testing <UserPanel /> component', () => {
  beforeEach(() => {
    render(<UserPanel />);
  });

  test('By default, input should\'t be visible', () => {
    expect(screen.queryByPlaceholderText('Поиск...')).not.toBeInTheDocument();
  });

  describe('Testing user interaction', () => {
    test('Should show input field, when click was on search button', () => {
      const button = screen.getByTitle('Поиск');
      userEvent.click(button);
      expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
    });

    test('Input should be in :focus after appear', () => {
      const button = screen.getByTitle('Поиск');
      userEvent.click(button);
      expect(document.activeElement).toBe(screen.getByPlaceholderText('Поиск...'));
    });

    test('Input value should change when user change it', () => {
      const button = screen.getByTitle('Поиск');
      userEvent.click(button);
      const input = screen.getByPlaceholderText('Поиск...') as HTMLInputElement;
      const someText = 'someText';
      fireEvent.change(input, { target: { value: someText } });
      expect(input.value).toEqual(someText);
    });
  });
});
