/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, getByText, queryByRole, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Filter from './filter';

import { ENTER } from '../../../../../../../styles/variables';

describe('Testing <Filter /> component', () => {
  let fieldsetElement: HTMLFieldSetElement;
  let legendElement: HTMLLegendElement;

  beforeEach(() => {
    render(<Filter />);
    fieldsetElement = screen.getAllByRole('group')[0] as HTMLFieldSetElement;
    legendElement = getByText(fieldsetElement, 'Бренд') as HTMLLegendElement;
  });

  test('By default all lists are opened', () => {
    expect(screen.queryAllByRole('list')).toBeTruthy();
  });

  describe('Testing user interaction', () => {
    describe('Appear block', () => {
      afterEach(() => {
        expect(queryByRole(fieldsetElement, 'list')).toBeInTheDocument();
      });

      test('After click', () => {
        userEvent.click(legendElement);
        expect(legendElement.classList.contains('active')).toBeFalsy();
        expect(fieldsetElement.classList.contains('active')).toBeFalsy();
        userEvent.click(legendElement);
      });

      test('After push Enter', () => {
        fireEvent.keyUp(legendElement, { code: ENTER, key: ENTER });
        expect(legendElement.classList.contains('active')).toBeFalsy();
        expect(fieldsetElement.classList.contains('active')).toBeFalsy();
        userEvent.click(legendElement);
      });
    });

    describe('Disappear block', () => {
      afterEach(() => {
        expect(fieldsetElement.classList.contains('active')).toBeFalsy();
        expect(legendElement.classList.contains('active')).toBeFalsy();
        expect(queryByRole(fieldsetElement, 'list')).not.toBeInTheDocument();
      });

      test('After click', () => {
        userEvent.click(legendElement);
      });

      test('After push Enter', () => {
        fireEvent.keyUp(legendElement, { code: ENTER, key: ENTER });
      });
    });
  });
});
