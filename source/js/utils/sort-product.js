// Сортирует список продуктов по типу сортировки.

export default function sortProduct(sortType, watchItemList) {
  switch (sortType) {
    case 'цене':
      return [...watchItemList.sort((a, b) => Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, '')))];
    default:
      return [...watchItemList.sort((a, b) => b.popularity - a.popularity)];
  }
}
