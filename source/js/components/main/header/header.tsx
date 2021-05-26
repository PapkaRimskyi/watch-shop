import React, { FC, useState } from 'react';

import Burger from './burger/burger';
import Logo from './logo/logo';
import UserNavigation from './user-navigation/user-navigation';
import UserPanel from './user-panel/user-panel';

import { Header as HeaderTag, ContainerBlock } from './s-header';

const Header: FC = () => {
  const [popupStatus, setPopupStatus] = useState(false);

  const changePopupStatus = (e: React.MouseEvent) => {
    e.preventDefault();
    setPopupStatus((prevState) => !prevState);
  };

  return (
    <HeaderTag>
      <ContainerBlock>
        <Burger changePopupStatus={changePopupStatus} />
        <Logo />
      </ContainerBlock>
      <UserNavigation isOpen={popupStatus} />
      <UserPanel />
    </HeaderTag>
  );
};

export default Header;
