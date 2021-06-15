/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';

import userIcon from './user-icons';

describe('Testing user-icon functional', () => {
  const [searchIcon, favoriteIcon, basketIcon] = [userIcon('search'), userIcon('favorite'), userIcon('basket')];
  test.each([['search', searchIcon], ['favorite', favoriteIcon], ['basket', basketIcon], ['something', null]])('Should equal if function return JSX.Element or not if default block was triggered',
    (type, elem) => expect(userIcon(type)).toEqual(elem));
});
