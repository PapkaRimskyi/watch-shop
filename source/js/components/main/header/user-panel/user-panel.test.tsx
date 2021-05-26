/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import UserPanel from './user-panel';

describe('Testing <UserPanel /> component', () => {
  test('Should show input field, when click was on search button', () => {
    const { getByTitle, queryByPlaceholderText, getByPlaceholderText } = render(<UserPanel />);
    const button = getByTitle('Поиск');
    expect(queryByPlaceholderText('Поиск...')).not.toBeInTheDocument();
    userEvent.click(button);
    expect(getByPlaceholderText('Поиск...')).toBeInTheDocument();
  });
});
