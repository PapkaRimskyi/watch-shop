import { GET_SORT_TYPE } from '../../action-names/action-names';

export default function getSortType(sortType) {
  return {
    type: GET_SORT_TYPE,
    sortType,
  };
}
