import React from 'react';

import { InstagramIcon, FacebookIcon, TwitterIcon } from '../../../../svg-icons/social-icons';

// Данные для ссылок на соц. сети. Внутри находятся компоненты с svg иконками.

const socialLinksData = [
  {
    linkType: 'instagram',
    icon: <InstagramIcon />,
  },
  {
    linkType: 'facebook',
    icon: <FacebookIcon />,
  },
  {
    linkType: 'twitter',
    icon: <TwitterIcon />,
  },
];

export default socialLinksData;
