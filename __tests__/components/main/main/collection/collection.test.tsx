import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Collection from '../../../../../source/js/components/main/main/collection/collection';

describe('Testing <Collection /> component', () => {
  let contain: HTMLElement;
  beforeEach(() => {
    const { container } = render(<Collection />);
    contain = container;
  });

  test('Should successfully render a <Collection /> component', () => {
    expect(contain.querySelector('section')).toBeInTheDocument();
  });

  test('Should have link to catalog page', () => {
    expect(screen.getByText('Смотреть каталог')).toBeInTheDocument();
  });

  test('Should have 1 paragraph about collection', () => {
    expect(screen.getByText('Швейцарские часы', { exact: false })).toBeInTheDocument();
  });

  test('Should have 1 image, which present product', () => {
    expect(screen.getByAltText('Пример часов из коллекции')).toBeInTheDocument();
  });
});
