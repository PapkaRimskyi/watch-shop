import { TO_FAVORITE, TO_BASKET } from '../../action-names/action-names';

// в качестве стейта - объект, который хранит коллекцию для избранных и для корзины.
// принимает type - тип экшена, product - какой именно продукт удаляется или добавляется в соответствующую коллекцию
// actionType - булево значение. если true, значит продукт уже записан в коллекцию и он будет удален из нее. если false, значит продукта нет в коллекции и он будет добавлен.

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
