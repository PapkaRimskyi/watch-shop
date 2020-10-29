import { combineReducers } from 'redux';

import getSortType from './get-sort-type/get-sort-type';
import baksetAndFavorite from './basket-and-favorite/basket-and-favorite';

export default combineReducers(
  {
    sortType: getSortType,
    userSelectedProducts: baksetAndFavorite,
  },
);
