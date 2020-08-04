import React from 'react';

import { SearchIcon, FavoriteIcon, BasketIcon } from '../../svg-icons/user-icons';

const userButtonsModel = [
  {
    className: 'search',
    ariaLabel: 'Поиск по сайту',
    icon: <SearchIcon />,
  },
  {
    className: 'favorite',
    ariaLabel: 'Избранное',
    icon: <FavoriteIcon />,
  },
  {
    className: 'basket',
    ariaLabel: 'Корзина',
    icon: <BasketIcon />,
  },
];

export default userButtonsModel;
