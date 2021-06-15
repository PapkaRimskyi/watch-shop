/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserButton from './user-button';

describe('Testing <UserButton /> component', () => {
  test('Creating component as <a>', () => {
    const { getByTitle } = render(<UserButton elemClass="favorite" href="/favorite" title="Избранное" />);
    expect(getByTitle('Избранное')).toBeInstanceOf(HTMLAnchorElement);
  });

  test('Creating component as <button>', () => {
    const mockFunc = jest.fn();
    const { getByTitle } = render(<UserButton elemClass="favorite" title="Добавить в избранное" handler={mockFunc} />);
    expect(getByTitle('Добавить в избранное')).toBeInstanceOf(HTMLButtonElement);
  });
});
