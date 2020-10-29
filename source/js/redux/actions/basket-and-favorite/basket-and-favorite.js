import { TO_FAVORITE, TO_BASKET } from '../../action-names/action-names';

export function addToFavorite(product, actionType) {
  return {
    type: TO_FAVORITE,
    product,
    actionType,
  };
}

export function addToBasket(product, actionType) {
  return {
    type: TO_BASKET,
    product,
    actionType,
  };
}
