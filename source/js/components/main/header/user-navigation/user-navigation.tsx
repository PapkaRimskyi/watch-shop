import React from 'react';

import { Navigation, List, Item } from './s-user-navigation';

interface IUserNavigationProps {
  isOpen: boolean,
}

const UserNavigation: React.FC<IUserNavigationProps> = ({ isOpen }) => (
  <Navigation isOpen={isOpen}>
    <List>
      <Item>
        <a href="/catalog">Каталог</a>
      </Item>
      <Item>
        <a href="/promotions">Акции</a>
      </Item>
      <Item>
        <a href="/delivery">Доставка</a>
      </Item>
      <Item>
        <a href="/contacts">Контакты</a>
      </Item>
    </List>
  </Navigation>
);

export default UserNavigation;
