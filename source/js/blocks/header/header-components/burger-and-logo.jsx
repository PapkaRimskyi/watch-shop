import React from 'react';

import Logo from '../../universal-buttons/logo';
import BurgerButton from '../../universal-buttons/burger-button';

export default function BurgerAndLogo({ buttonHandler }) {
  return (
    <div className="burger-and-logo">
      <BurgerButton buttonHandler={buttonHandler} />
      <Logo />
    </div>
  );
}
