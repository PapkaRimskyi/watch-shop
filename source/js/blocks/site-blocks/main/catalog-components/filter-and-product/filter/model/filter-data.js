// Моковые данные для фильтра
const filterData = [
  {
    menuStatus: true,
    filterName: 'Стоимость',
    ariaLabel: 'Диапазон цены',
  },
  {
    menuStatus: true,
    filterName: 'Бренд',
    ariaLabel: 'Список брендов',
    options: ['Techne', 'Rado', 'Bvlgari', 'Tissot', 'Omega', 'Montblanc'],
  },
  {
    menuStatus: false,
    filterName: 'Механизм',
    ariaLabel: 'Список типов механизма',
    options: ['Механические', 'Электронные', 'Кварцевые'],
  },
  {
    menuStatus: false,
    filterName: 'Материал',
    ariaLabel: 'Список материалов',
    options: ['Сталь', 'Титан'],
  },
  {
    menuStatus: false,
    filterName: 'Цвет',
    ariaLabel: 'Список цветов',
    options: ['Белый', 'Чёрный'],
  },
];

export default filterData;
