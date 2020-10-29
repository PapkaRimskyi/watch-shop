import { TO_FAVORITE, TO_BASKET } from '../../action-names/action-names';

export default function basketAndFavorite(state = { favorites: [], basket: [] }, { type, product, actionType }) {
  switch (type) {
    case TO_FAVORITE:
      return actionType ? { ...state, favorites: state.favorites.filter((prod) => prod.id !== product.id) } : { ...state, favorites: [].concat(state.favorites, product) };
    case TO_BASKET:
      return actionType ? { ...state, basket: state.basket.filter((prod) => prod.id !== product.id) } : { ...state, basket: [].concat(state.basket, product) };
    default:
      return state;
  }
}
