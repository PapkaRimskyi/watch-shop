import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Main from '../../../../source/js/components/main/main/main';

describe('Testing <Main /> component', () => {
  test('Should successfully render a <Main /> component', () => {
    render(<Main />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
