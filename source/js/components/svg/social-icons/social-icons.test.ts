/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';

import socialIcons from './social-icons';

describe('Testing social-icon functional', () => {
  test.each([['instagram', true], ['facebook', true], ['twitter', true], ['something', false]])('Should equal true if function return JSX.Element or false if default block was triggered',
    (iconType, expectBool) => {
      expect(Boolean(socialIcons(iconType))).toBe(expectBool);
    });
});
