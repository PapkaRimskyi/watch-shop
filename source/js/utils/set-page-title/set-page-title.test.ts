/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import setPageTitle from './set-page-title';

describe('Testing set-page-title function', () => {
  test('Should set document.title', () => {
    const title = 'test';
    setPageTitle(title);
    expect(document.title).toBe(title);
  });
});
