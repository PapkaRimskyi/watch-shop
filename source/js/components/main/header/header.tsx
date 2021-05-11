import React from 'react';

import Burger from './burger/burger';
import Logo from './logo/logo';
import UserPanel from './user-panel/user-panel';

const Header: React.FC = () => (
  <header>
    <Burger />
    <Logo />
    <UserPanel />
  </header>
);

export default Header;
