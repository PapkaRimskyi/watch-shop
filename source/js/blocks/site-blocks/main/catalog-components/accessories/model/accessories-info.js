// Моковые данные аксессуаров.
// Расшифровка записи в ID: w - watch, a - accessories, s - strap (тип аксессуара) и цифра в конце.

const accessoriesInfo = [
  {
    id: 'wa(s)0',
    brandName: 'Georg Jensen',
    price: '6 500',
    imgPath: 'assets/img/band_1.png',
    extraImgs: ['assets/img/band_1.png', 'assets/img/band_1.png', 'assets/img/band_1.png'],
    techInfo: { type: 'Ремешок', material: 'Кожа', color: 'Коричневый' },
    description: ['Этот ремень отлично подойдет к вашим наручным часам. Они сделаны из твёрдой кожи, что гарантирует долговечность.'],
  },
  {
    id: 'wa(s)1',
    brandName: 'Nato',
    price: '3 200',
    imgPath: 'assets/img/band_2.png',
    extraImgs: ['assets/img/band_2.png', 'assets/img/band_2.png'],
    techInfo: { type: 'Ремешок', material: 'Кожа', color: 'Чёрный' },
    description: ['Этот ремень отлично подойдет к вашим наручным часам. Они сделаны из твёрдой кожи, что гарантирует долговечность.'],
  },
  {
    id: 'wa(s)2',
    brandName: 'Spark',
    price: '5 400',
    imgPath: 'assets/img/band_3.png',
    extraImgs: ['assets/img/band_3.png', 'assets/img/band_3.png', 'assets/img/band_3.png', 'assets/img/band_3.png'],
    techInfo: { type: 'Ремешок', material: 'Кожа', color: 'Оранжевый' },
    description: ['Этот ремень отлично подойдет к вашим наручным часам. Они сделаны из твёрдой кожи, что гарантирует долговечность.'],
  },
];

export default accessoriesInfo;
