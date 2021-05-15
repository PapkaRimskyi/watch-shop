/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Logo from './logo';

describe('Testing <Logo /> component', () => {
  test('Should successfully render a <Logo /> component', () => {
    const { getByAltText } = render(<Logo />);
    expect(getByAltText('Логотип нашего сайта')).toBeInTheDocument();
  });
});
