import React from 'react';

import { Navigation, List, Item } from './s-user-navigation';

import data from './data/data';

interface IUserNavigationProps {
  isOpen: boolean,
}

const UserNavigation: React.FC<IUserNavigationProps> = ({ isOpen }) => (
  <Navigation isOpen={isOpen}>
    <List>
      {data.map((link) => (
        <Item key={link.name}>
          <a href={link.linkTo}>{link.name}</a>
        </Item>
      ))}
    </List>
  </Navigation>
);

export default UserNavigation;
