import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserNavigation from '../../../../../source/js/components/main/header/user-navigation/user-navigation';

describe('Testing <UserNavigation /> component', () => {
  test('Should successfully render a <UserNavigation /> component', () => {
    const { getByRole } = render(<UserNavigation isOpen />);
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
