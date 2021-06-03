/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

import Sort from './sort';

import { ENTER } from '../../../../../../../styles/variables';

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
    describe('Appear block', () => {
      afterEach(() => {
        expect(screen.queryByRole('list')).toBeInTheDocument();
      });

      test('After click', () => {
        userEvent.click(input);
      });

      test('After push Enter', () => {
        fireEvent.keyUp(input, { code: ENTER, key: ENTER });
      });
    });

    describe('Disappear block', () => {
      afterEach(() => {
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
      });

      test('After click', () => {
        userEvent.click(input);
        userEvent.click(input);
      });

      test('After push Enter', () => {
        fireEvent.keyUp(input, { code: ENTER, key: ENTER });
        fireEvent.keyUp(input, { code: ENTER, key: ENTER });
      });
    });

    test('Popup should close after user choose option in sort list and input should update', () => {
      userEvent.click(input);
      userEvent.click(screen.getByText('цене'));
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
      expect(input.value).toEqual('цене');
    });
  });
});
