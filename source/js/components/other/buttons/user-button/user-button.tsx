import React, { FC } from 'react';

import getSpecialIcon from '../../../svg/user-icons/user-icons';

import InteractiveElement from './s-user-button';

import IUserButton from './interface';

const UserButton: FC<IUserButton> = ({ elemClass, href, title, handler }) => (
  <InteractiveElement className={elemClass} type={href ? undefined : 'button'} href={href} as={href ? 'a' : 'button'} title={title} onClick={handler}>
    {getSpecialIcon(elemClass)}
  </InteractiveElement>
);

export default UserButton;
