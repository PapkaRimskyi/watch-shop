import React, { FC } from 'react';

import getSpecialIcon from '../../../svg/user-icons/user-icons';

import InteractiveElement from './s-user-button';

interface IUserButton {
  elemClass: 'favorite' | 'basket' | 'search',
  href?: string,
  title?: string,
  handler?: ((e: React.MouseEvent) => void),
}

const UserButton: FC<IUserButton> = ({ elemClass, href, title, handler }) => (
  <InteractiveElement className={elemClass} type={href ? undefined : 'button'} href={href || undefined} as={href ? 'a' : 'button'} title={title} onClick={handler}>
    {getSpecialIcon(elemClass)}
  </InteractiveElement>
);

export default UserButton;
