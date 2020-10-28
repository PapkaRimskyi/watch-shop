import { ADD_TO_FAVORITE, ADD_TO_BASKET } from '../../action-names/action-names';

export default function basketAndFavorite(state = { favorites: [], basket: [] }, { type, product }) {
  switch (type) {
    case ADD_TO_FAVORITE:
      state.favorites.push(product);
      return { ...state };
    case ADD_TO_BASKET:
      state.basket.push(product);
      return { ...state };
    default:
      return state;
  }
}
