/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

import Sort from './sort';

describe('Testing <Sort /> component', () => {
  let input: HTMLInputElement;
  beforeEach(() => {
    render(<Sort />);
    input = screen.getByRole('textbox') as HTMLInputElement;
  });

  describe('Checking default status', () => {
    test('Sort input should have a default value', () => {
      expect(input.value).toEqual('популярности');
    });

    test('By default popup with sort list shouldn\'t be opened', () => {
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
  });

  describe('Checking user interaction with component', () => {
    test('Popup should open when user click on input', () => {
      userEvent.click(input);
      expect(screen.queryByRole('list')).toBeInTheDocument();
    });

    test('Popup should open when user pressed Enter key on input', () => {
      fireEvent.keyUp(input, { code: 'Enter', key: 'Enter' });
      expect(screen.queryByRole('list')).toBeInTheDocument();
    });

    test('Popup should close after user choose option in sort list and input should update', () => {
      userEvent.click(input);
      userEvent.click(screen.getByText('цене'));
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
      expect(input.value).toEqual('цене');
    });
  });
});
