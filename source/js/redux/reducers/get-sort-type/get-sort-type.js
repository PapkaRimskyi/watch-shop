import { GET_SORT_TYPE } from '../../action-names/action-names';

export default function getSortType(state = 'популярности', { type, sortType }) {
  switch (type) {
    case GET_SORT_TYPE:
      return sortType;
    default:
      return state;
  }
}
