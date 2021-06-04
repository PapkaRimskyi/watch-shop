/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';

import userIcon from './user-icons';

describe('Testing user-icon functional', () => {
  test.each([['search', true], ['favorite', true], ['basket', true], ['something', false]])('Should equal true if function return JSX.Element or false if default block was triggered',
    (type, expectBool) => {
      expect(Boolean(userIcon(type))).toBe(expectBool);
    });
});
