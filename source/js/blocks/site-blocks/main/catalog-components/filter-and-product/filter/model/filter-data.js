// Моковые данные для фильтра
// Версию engOption использую внутри html разметки, а ruOption - для пользователя
const filterData = [
  {
    filterName: 'Стоимость',
    ariaLabel: 'Диапазон цены',
  },
  {
    filterName: 'Бренд',
    ariaLabel: 'Список брендов',
    inputType: 'brandName',
    options: [{ engOption: 'Techne' }, { engOption: 'Rado' }, { engOption: 'Bvlgari' }, { engOption: 'Tissot' }, { engOption: 'Omega' }, { engOption: 'Montblanc' }],
  },
  {
    filterName: 'Механизм',
    ariaLabel: 'Список типов механизма',
    inputType: 'mechType',
    options: [{ engOption: 'Mechanical', ruOption: 'Механические' }, { engOption: 'Electronic', ruOption: 'Электронные' }, { engOption: 'Quartz', ruOption: 'Кварцевые' }],
  },
  {
    filterName: 'Материал',
    ariaLabel: 'Список материалов',
    inputType: 'material',
    options: [{ engOption: 'Steel', ruOption: 'Сталь' }, { engOption: 'Titanium', ruOption: 'Титан' }],
  },
  {
    filterName: 'Цвет',
    ariaLabel: 'Список цветов',
    inputType: 'color',
    options: [{ engOption: 'White', ruOption: 'Белый' }, { engOption: 'Black', ruOption: 'Чёрный' }],
  },
];

export default filterData;
