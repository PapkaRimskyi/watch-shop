import React from 'react';

import BurgerAndLogo from './header-components/burger-and-logo';
import UserButtonPanel from './header-components/user-button-panel';

export default function Header() {
  return (
    <header className="header-site">
      <BurgerAndLogo />
      <UserButtonPanel />
    </header>
  );
}
