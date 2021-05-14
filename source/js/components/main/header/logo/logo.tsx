import React from 'react';

import LogoLink from './s-logo';

import '../../../../../img/logo/logo.png';

const Logo: React.FC = () => (
  <LogoLink href="/">
    <img src="assets/img/logo.png" alt="Логотип нашего сайта" />
  </LogoLink>
);

export default Logo;
