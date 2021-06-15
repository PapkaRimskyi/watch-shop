/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ThemeProvider } from 'styled-components';

import 'jest-styled-components';

import ArrowButton from './arrow-button';

describe('Testing <ArrowButton /> component', () => {
  const mockFunc = jest.fn();
  const theme = { width: '20px', height: '20px' };

  describe('Testing width and height rules', () => {
    test('By default none of width and height css rule not exist', () => {
      const { getByRole } = render(<ArrowButton title="Предыдущий слайд" side="left" disabled={false} onClick={mockFunc} />);
      expect(getByRole('button')).not.toHaveStyle(`width: ${theme.width}`);
      expect(getByRole('button')).not.toHaveStyle(`height: ${theme.height}`);
    });

    test('If <ThemeProvider> is a wrapper around ArrowButton, then width and height will be applied', () => {
      const { getByRole } = render(
        <ThemeProvider theme={theme}>
          <ArrowButton title="Предыдущий слайд" side="left" disabled={false} onClick={mockFunc} />
        </ThemeProvider>,
      );
      expect(getByRole('button')).toHaveStyle(`width: ${theme.width}`);
      expect(getByRole('button')).toHaveStyle(`height: ${theme.height}`);
    });
  });

  describe('Testing transform: rotate rule', () => {
    test('By default, if to <ArrowButton /> was passed props side equal "left", transform: rotate not applied to svg inside button', () => {
      const { getByRole } = render(<ArrowButton title="Предыдущий слайд" side="left" disabled={false} onClick={mockFunc} />);
      expect(getByRole('button')).not.toHaveStyle('transform: rotate(180deg)');
    });

    test('If to <ArrowButton /> was passed props side equal "right", svg inside button must have transform: rotate css rule', () => {
      const { getByRole } = render(<ArrowButton title="Предыдущий слайд" side="right" disabled={false} onClick={mockFunc} />);
      expect(getByRole('button').firstChild).toHaveStyle('transform: rotate(180deg)');
    });
  });
});
