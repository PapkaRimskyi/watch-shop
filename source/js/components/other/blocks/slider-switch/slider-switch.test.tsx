/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SliderSwitch from './slider-switch';

describe('Testing a <Slider /> component', () => {
  const decrement = jest.fn();
  const increment = jest.fn();
  const defaultValue = 1;

  beforeEach(() => {
    render(<SliderSwitch counter={defaultValue} increment={increment} decrement={decrement} />);
  });

  test('Should have 2 button with different title', () => {
    expect(screen.getByRole('button', { name: 'Предыдущий слайд' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Следующий слайд' })).toBeInTheDocument();
  });

  test('Should been set defaultValue as default counter value', () => {
    expect(screen.getByText(defaultValue)).toBeInTheDocument();
  });
});
