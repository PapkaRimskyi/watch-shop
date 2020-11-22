import React from 'react';

import { SearchIcon, FavoriteIcon, BasketIcon } from '../../../../../svg-icons/user-icons/user-icons';

// Пользовательские кнопки.

const userButtonsModel = [
  {
    className: 'search',
    ariaLabel: 'Поиск по сайту',
    href: '',
    icon: <SearchIcon />,
  },
  {
    className: 'favorite',
    ariaLabel: 'Избранное',
    href: '/favorite-list',
    icon: <FavoriteIcon />,
  },
  {
    className: 'basket',
    ariaLabel: 'Корзина',
    href: '/basket-list',
    icon: <BasketIcon />,
  },
];

export default userButtonsModel;
