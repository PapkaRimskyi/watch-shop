/* eslint-disable no-restricted-syntax */

// Получаю массив чекнутых фильтров для того, чтобы понимать, какие данные для рендера использовать.

export function getActiveFiltersCollection(filters) {
  return [].concat(...filters.map((filter) => filter.options.filter((option) => option.optionStatus)));
}

//

// Функция, позволяющая получать коллекцию фильтров, которые пользователь нажал.

function getFiltersWithActiveOptions(filters) {
  return filters.map((filter) => ({ filterName: filter.filterName, inputType: filter.inputType, options: filter.options.filter((option) => option.optionStatus) }));
}

//

// Применяет фильтры.
// В зависимости от результата первой проверки, функция сработает по-разному.
// В первом случае, функция запушит результат в коллекцию filteredProducts.
// Во втором варианте, функция будет фильтровать уже filteredProducts, так как мы хотим на основе первичной фильтрации продолжать сужать поиск.
// Проверка isItTechInfo нужна для правильного взятия инфы из объекта.

function applyFilterToProductList(products, inputType, filterOptions, filteredProducts, isItTechInfo) {
  const filteredProductsByExtraOptions = [];
  if (!filteredProducts.length) {
    for (const option of filterOptions) {
      if (isItTechInfo) {
        filteredProducts.push(...products.filter((product) => product.techInfo[inputType].toLowerCase() === option.optionName.toLowerCase()));
      } else {
        filteredProducts.push(...products.filter((product) => product[inputType].toLowerCase() === option.optionName.toLowerCase()));
      }
    }
  } else {
    for (let i = 0; i < filterOptions.length; i += 1) {
      if (isItTechInfo) {
        filteredProductsByExtraOptions.push(...filteredProducts.filter((product) => product.techInfo[inputType] === filterOptions[i].optionName));
      } else {
        filteredProductsByExtraOptions.push(...filteredProducts.filter((product) => product[inputType] === filterOptions[i].optionName));
      }
      if (i + 1 === filterOptions.length) {
        filteredProducts.length = 0;
        filteredProducts.push(...filteredProductsByExtraOptions);
      }
    }
  }
}

//

// В зависимости от названия фильтра, запускает функцию с определенными параметрами.

function defineWhichFilterShouldApply(products, filter, filterOptions, filteredProducts) {
  switch (filter.filterName) {
    case 'Бренд':
      applyFilterToProductList(products, filter.inputType, filterOptions, filteredProducts, false);
      break;
    case 'Механизм':
    case 'Материал':
    case 'Цвет':
      applyFilterToProductList(products, filter.inputType, filterOptions, filteredProducts, true);
      break;
    default:
      break;
  }
}

//

// Возвращает отфильтрованный массив продуктов.

export function filterProducts(products, filters) {
  const activeFilters = getFiltersWithActiveOptions(filters);
  const filteredProducts = [];
  for (const filter of activeFilters) {
    if (filter.options.length) {
      defineWhichFilterShouldApply(products, filter, filter.options, filteredProducts);
    }
  }
  return filteredProducts;
}

//
