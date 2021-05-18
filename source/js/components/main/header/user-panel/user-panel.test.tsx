/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, within, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import UserPanel from './user-panel';

describe('Testing <UserPanel /> component', () => {
  beforeEach(() => {
    render(<UserPanel />);
  });

  test('Checking count elements of <li> inside a <ul>', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('Checking elements which inside <li>. Should have 1 <button> and 2 <a>', () => {
    const ul = screen.getByRole('list');

    expect(within(ul).getByRole('button')).toBeInTheDocument();
    expect(within(ul).getAllByRole('link')).toHaveLength(2);
  });

  test('Should show input field, when click was on search button', () => {
    const button = screen.getByTitle('Кнопка для вызова поля поиска');
    expect(screen.queryByPlaceholderText('Поиск...')).not.toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
  });
});
