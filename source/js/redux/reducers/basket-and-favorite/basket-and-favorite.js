import { TO_FAVORITE, TO_BASKET } from '../../action-names/action-names';

import USER_SELECTED_PRODUCTS from '../../redux-variables/variables';
import { FAVORITE, BASKET } from '../../../variables/variables';

// Функция, которая одновременно меняет и userSelectedProducts и такую же коллекцию в localStorage.

function changeStateAndLocalStorage(state, product, actionType, objKeyName) {
  let newCol;
  if (actionType) {
    newCol = state[objKeyName].filter((prod) => prod.id !== product.id);
  } else {
    newCol = [].concat(state[objKeyName], product);
  }
  localStorage.setItem(USER_SELECTED_PRODUCTS, JSON.stringify({ ...state, [objKeyName]: newCol }));
  return { ...state, [objKeyName]: newCol };
}

//

// Функция, которая при первичном создании стейта userSelectedProducts, проверяет, есть ли в localStorage одноименная коллекция. Если есть - ставит ее в state или создает пустые значения.

function checkLocalStorage() {
  if (localStorage.getItem(USER_SELECTED_PRODUCTS)) {
    return { ...JSON.parse(localStorage.getItem(USER_SELECTED_PRODUCTS)) };
  }
  localStorage.setItem(USER_SELECTED_PRODUCTS, JSON.stringify({ favorite: [], basket: [] }));
  return { favorite: [], basket: [] };
}

//

// в качестве стейта - объект, который хранит коллекцию для избранных и для корзины.
// принимает type - тип экшена, product - какой именно продукт удаляется или добавляется в соответствующую коллекцию
// actionType - булево значение. если true, значит продукт уже записан в коллекцию и он будет удален из нее. если false, значит продукта нет в коллекции и он будет добавлен.

export default function basketAndFavorite(state = checkLocalStorage(), { type, product, actionType }) {
  switch (type) {
    case TO_FAVORITE:
      return changeStateAndLocalStorage(state, product, actionType, FAVORITE);
    case TO_BASKET:
      return changeStateAndLocalStorage(state, product, actionType, BASKET);
    default:
      return state;
  }
}
