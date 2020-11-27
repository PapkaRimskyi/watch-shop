// Моковые данные для фильтра
const filterData = [
  {
    filterName: 'Стоимость',
    ariaLabel: 'Диапазон цены',
  },
  {
    filterName: 'Бренд',
    ariaLabel: 'Список брендов',
    options: ['Techne', 'Rado', 'Bvlgari', 'Tissot', 'Omega', 'Montblanc'],
  },
  {
    filterName: 'Механизм',
    ariaLabel: 'Список типов механизма',
    options: ['Механические', 'Электронные', 'Кварцевые'],
  },
  {
    filterName: 'Материал',
    ariaLabel: 'Список материалов',
    options: ['Сталь', 'Титан'],
  },
  {
    filterName: 'Цвет',
    ariaLabel: 'Список цветов',
    options: ['Белый', 'Чёрный'],
  },
];

export default filterData;
