import React, { FC } from 'react';

import { Navigation, List, Item, LinkToSections } from './s-user-navigation';

import IUserNavigation from './interface';

import data from './data/data';

const UserNavigation: FC<IUserNavigation> = ({ isOpen }) => (
  <Navigation isOpen={isOpen}>
    <List>
      {data.map((link) => (
        <Item key={link.name}>
          <LinkToSections exact to={link.linkTo}>{link.name}</LinkToSections>
        </Item>
      ))}
    </List>
  </Navigation>
);

export default UserNavigation;
