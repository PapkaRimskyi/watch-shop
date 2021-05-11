import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Logo from '../../../../../source/js/components/main/header/logo/logo';

describe('Testing <Logo /> component', () => {
  test('Should successfully render a <Logo /> component', () => {
    const { getByTitle } = render(<Logo />);
    expect(getByTitle('Логотип нашего сайта')).toBeInTheDocument();
  });
});
