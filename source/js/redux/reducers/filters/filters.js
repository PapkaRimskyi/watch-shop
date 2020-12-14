import { CHANGE_FILTER, RESET_FILTER } from '../../action-names/action-names';
import filterData from '../../../blocks/site-blocks/main/catalog-components/filter-and-product/filter/model/filter-data';

// Создаю дефолтный state с помощью структуры filterData.

function createFilterStore() {
  return filterData
    .filter((filterSection) => filterSection.options)
    .map((filterSection) => filterSection.options && ({ filterName: filterSection.filterName, inputType: filterSection.inputType, options: filterSection.options.map((option) => ({ optionName: option.engOption, optionStatus: false })) }));
}

//

export default function changeFilter(state = createFilterStore(), { type, filterName, inputType, optionName }) {
  switch (type) {
    case CHANGE_FILTER:
      return [...state.map((section) => (section.filterName === filterName ? { filterName, inputType, options: section.options.map((option) => (option.optionName === optionName ? { optionName, optionStatus: !option.optionStatus } : option)) } : section))];
    case RESET_FILTER:
      return [...createFilterStore()];
    default:
      return state;
  }
}
