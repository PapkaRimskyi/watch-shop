import { combineReducers } from 'redux';

import getSortType from './get-sort-type/get-sort-type';
import baksetAndFavorite from './basket-and-favorite/basket-and-favorite';

import USER_SELECTED_PRODUCTS from '../redux-variables/variables';

export default combineReducers(
  {
    sortType: getSortType,
    [USER_SELECTED_PRODUCTS]: baksetAndFavorite,
  },
);
