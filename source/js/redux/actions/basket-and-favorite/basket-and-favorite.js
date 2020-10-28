import { ADD_TO_FAVORITE, ADD_TO_BASKET } from '../../action-names/action-names';

export function addToFavorite(product) {
  return {
    type: ADD_TO_FAVORITE,
    product,
  };
}

export function addToBasket(product) {
  return {
    type: ADD_TO_BASKET,
    product,
  };
}
