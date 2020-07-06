import React from 'react';

import Logo from '../../universal-buttons/logo';
import BurgerMenu from '../../universal-buttons/burger-menu';

export default function BurgerAndLogo() {
  return (
    <div className="burger-and-logo">
      <BurgerMenu />
      <Logo />
    </div>
  );
}
