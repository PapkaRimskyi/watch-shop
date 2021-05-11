import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserPanel from '../../../../../source/js/components/main/header/user-panel/user-panel';

describe('Testing <UserPanel /> component', () => {
  test('Should successfully render a <UserPanel /> component', () => {
    const { getByRole } = render(<UserPanel />);

    expect(getByRole('list')).toBeInTheDocument();
  });

  test('Checking count elements of <li> inside a <ul>', () => {
    const { getAllByRole } = render(<UserPanel />);

    expect(getAllByRole('listitem')).toHaveLength(3);
  });

  test('Checking elements which inside <li>. Should have 1 <button> and 2 <a>', () => {
    const { getByRole } = render(<UserPanel />);
    const ul = getByRole('list');

    expect(within(ul).getByRole('button')).toBeInTheDocument();
    expect(within(ul).getAllByRole('link')).toHaveLength(2);
  });
});
