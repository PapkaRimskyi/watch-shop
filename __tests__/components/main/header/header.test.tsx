import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../../../source/js/components/main/header/header';

describe('Testing <Header /> component', () => {
  test('Should successfully render a <Header /> component', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('banner')).toBeInTheDocument();
  });
});
