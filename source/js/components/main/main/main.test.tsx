/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Main from './main';

describe('Testing <Main /> component', () => {
  test('Should successfully render a <Main /> component', () => {
    render(<Main />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
