import React, { FC } from 'react';

import LogoLink from './s-logo';

import '../../../../../img/logo/logo.png';

const Logo: FC = () => (
  <LogoLink href="/" title="На главную страницу">
    <img src="/assets/img/logo.png" alt="Логотип нашего сайта" />
  </LogoLink>
);

export default Logo;
