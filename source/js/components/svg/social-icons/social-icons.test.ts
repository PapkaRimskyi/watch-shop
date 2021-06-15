/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';

import socialIcons from './social-icons';

describe('Testing social-icon functional', () => {
  const [instagramIcon, facebookIcon, twitterIcon] = [socialIcons('instagram'), socialIcons('facebook'), socialIcons('twitter')];
  test.each([['instagram', instagramIcon], ['facebook', facebookIcon], ['twitter', twitterIcon], ['something', null]])('Should equal true if function return JSX.Element or false if default block was triggered',
    (iconType, elem) => {
      expect(socialIcons(iconType)).toEqual(elem);
    });
});
