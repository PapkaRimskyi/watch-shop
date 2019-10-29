const productList = document.querySelector('.product__list');
const productInfoCollection = {
  watch1: {
    imgPath: 'assets/img/product__product-img1.png',
    productProperties: {
      brand: 'Techne',
      price: 12700,
      mechanism: 'mechanical',
      material: 'steel',
      color: 'white',
    },
  },
  watch2: {
    imgPath: 'assets/img/product__product-img2.png',
    productProperties: {
      brand: 'Techne',
      price: 12700,
      mechanism: 'mechanical',
      material: 'steel',
      color: 'black',
    },
  },
  watch3: {
    imgPath: 'assets/img/product__product-img3.png',
    productProperties: {
      brand: 'Techne',
      price: 15700,
      mechanism: 'quartz',
      material: 'steel',
      color: 'black',
    },
  },
  watch4: {
    imgPath: 'assets/img/product__product-img4.png',
    productProperties:  {
      brand: 'Techne',
      price: 15700,
      mechanism: 'quartz',
      material: 'steel',
      color: 'white',
    },
  },
  watch5: {
    imgPath: 'assets/img/product__product-img5.png',
    productProperties:  {
      brand: 'Techne',
      price: 12700,
      mechanism: 'quartz',
      material: 'steel',
      color: 'black',
    },
  },
  watch6: {
    imgPath: 'assets/img/product__product-img6.png',
    productProperties:  {
      brand: 'Techne',
      price: 18500,
      mechanism: 'quartz',
      material: 'titanium',
      color: 'white',
    },
  },
  watch7: {
    imgPath: 'assets/img/product__product-img7.png',
    productProperties: {
      brand: 'Techne',
      price: 15700,
      mechanism: 'quartz',
      material: 'steel',
      color: 'white',
    },
  },
  watch8: {
    imgPath: 'assets/img/product__product-img8.png',
    productProperties: {
      brand: 'Rado',
      price: 14700,
      mechanism: 'electronic',
      material: 'steel',
      color: 'black',
    },
  },
  watch9: {
    imgPath: 'assets/img/product__product-img9.png',
    productProperties: {
      brand: 'Bvlgari',
      price: 72700,
      mechanism: 'quartz',
      material: 'titanium',
      color: 'white',
    },
  },
  watch10: {
    imgPath: 'assets/img/product__product-img10.png',
    productProperties: {
      brand: 'Techne',
      price: 22700,
      mechanism: 'quartz',
      material: 'titanium',
      color: 'white',
    },
  },
  watch11: {
    imgPath: 'assets/img/product__product-img11.png',
    productProperties: {
      brand: 'Rado',
      price: 22000,
      mechanism: 'electronic',
      material: 'titanium',
      color: 'white',
    },
  },
  watch12: {
    imgPath: 'assets/img/product__product-img12.jpg',
    productProperties: {
      brand: 'Bvlgari',
      price: 63000,
      mechanism: 'quartz',
      material: 'titanium',
      color: 'white',
    },
  },
};

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function addProductDataset() {
  let productCollection = productList.querySelectorAll('.product__item-card');
  let i = 0;
  for (let item of productCollection) {
    item.setAttribute('data-product', i);
    item.setAttribute('data-popular', getRandomNumber());
    i++;
  }
}

function priceIndent(price) {
  if (String(price).length === 5) {
    return `${price}`.slice(0, 2) + ' ' + `${price}`.slice(2) + ' Р';
  } else if (String(price).length === 6) {
    return `${price}`.slice(0, 3) + ' ' + `${price}`.slice(3) + ' Р';
  }
}

function renderProductItems(itemInfo) {
  let template = document.getElementById('productListTemplate').content;
  for (let item in itemInfo) {
    let li = template.querySelector('li');
    let {productProperties} = itemInfo[item];
    template.querySelector('.product__name').textContent = productProperties.brand;
    template.querySelector('.product__price').textContent = priceIndent(productProperties.price);
    template.querySelector('.product__image').src = itemInfo[item].imgPath;
    productList.append(template.cloneNode(true));
    addProductDataset();
  }
}

export const renderProductList = {
  productListSelector: document.querySelector('.product__list'),
  productInfoCollection: productInfoCollection,
  renderProductListFunc: renderProductItems,
}
