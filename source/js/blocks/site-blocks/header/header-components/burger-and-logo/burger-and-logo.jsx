import React from 'react';

import Logo from '../../../../universal-items/universal-buttons/logo/logo';
import BurgerButton from '../../../../universal-items/universal-buttons/burger-button/burger-button';

export default function BurgerAndLogo({ buttonHandler }) {
  return (
    <div className="burger-and-logo">
      <BurgerButton buttonHandler={buttonHandler} />
      <Logo />
    </div>
  );
}
