import { CHANGE_FILTER, RESET_FILTER } from '../../action-names/action-names';

export function changeFilter(filterName, inputType, optionName) {
  return {
    type: CHANGE_FILTER,
    filterName,
    inputType,
    optionName,
  };
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}
