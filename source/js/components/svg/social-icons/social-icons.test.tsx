/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';

import socialIcons from './social-icons';

describe('Testing functional in social-icons.tsx', () => {
  test('Should return JSX.Element by iconType prop', () => {
    expect(socialIcons('twitter')).toBeTruthy();
  });

  test('Should return null because iconType prop is not provided or not matching in switch', () => {
    expect(socialIcons('something')).toBeNull();
  });
});
