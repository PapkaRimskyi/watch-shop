import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Burger from '../../../../../source/js/components/main/header/burger/burger';

describe('Testing <Burger /> component', () => {
  test('Should successfully render a <Burger /> component', () => {
    const { getByTitle } = render(<Burger />);
    expect(getByTitle('Бургерное меню')).toBeInTheDocument();
  });
});
