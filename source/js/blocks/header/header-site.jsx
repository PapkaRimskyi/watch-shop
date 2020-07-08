import React from 'react';

import BurgerAndLogo from './header-components/burger-and-logo';
import UserButtonPanel from './header-components/user-button-panel';
import YearCollection from './header-components/year-collection';

export default function Header() {
  return (
    <header className="header-site">
      <section className="top-bar-site">
        <BurgerAndLogo />
        <UserButtonPanel />
      </section>
      <YearCollection />
    </header>
  );
}
