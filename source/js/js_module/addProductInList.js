const productList = document.querySelector('.product__list');

function getProductInfo(interactiveProductButton) {
  let productContainer = interactiveProductButton.closest('.product__list-item');
  return {
    brand: productContainer.querySelector('.product__name').textContent,
    price: productContainer.querySelector('.product__price').textContent,
    imgSrc: productContainer.querySelector('.product__image').getAttribute('src'),
    productNumber: productContainer.getAttribute('data-product'),
  }
}

function setProductInfo(template, productInfo) {
  template.querySelector('li').setAttribute('data-product', productInfo.productNumber);
  template.querySelector('img').src = productInfo.imgSrc;
  template.querySelector('.user-collection__name').textContent = productInfo.brand;
  template.querySelector('.user-collection__price').textContent = productInfo.price;
}

function renderProduct(interactiveProductButton, userCountType) {
  let productInfo = getProductInfo(interactiveProductButton);
  let favoriteTemplate = productTemplate.content;
  setProductInfo(favoriteTemplate, productInfo);
  let userSelectedProducts = document.querySelector(userCountType).closest('.top-bar__user-buttons-item').querySelector('.user-collection__list');
  userSelectedProducts.append(favoriteTemplate.cloneNode(true));
}

function checkForEmptyList(list) {
  if (list.children.length === 0) {
    list.parentNode.classList.remove('user-collection--display');
  }
}

function deleteProduct(interactiveProductButton, userCountType) {
  let productNumber = interactiveProductButton.closest('.product__list-item').getAttribute('data-product');
  let userSelectedProducts = document.querySelector(userCountType).parentNode.nextElementSibling.querySelector('.user-collection__list');
  let productsCollection = userSelectedProducts.children;
  for (let i = 0; i < productsCollection.length; i++) {
    if (productsCollection[i].getAttribute('data-product') === productNumber) {
      productsCollection[i].remove();
    }
  }
  checkForEmptyList(userSelectedProducts);
}

function getCountsOfProducts(interactiveProductButton, productCounter, buttonState) {
  let spanCounter = document.querySelector(productCounter);
  if (interactiveProductButton.classList.contains(buttonState)) {
    interactiveProductButton.classList.remove(buttonState);
    --spanCounter.textContent;
    deleteProduct(interactiveProductButton, productCounter);
    return;
  }
  interactiveProductButton.classList.add(buttonState);
  ++spanCounter.textContent;
  renderProduct(interactiveProductButton, productCounter);
}

function interactiveProductButtonsHandler(e) {
  e.preventDefault();
  let productButton;
  if (e.target.closest('.product__like-button')) {
    productButton = e.target.closest('.product__like-button');
    getCountsOfProducts(productButton, '.top-bar__user-count--favorites', 'product__like-button--active');
  } else if (e.target.closest('.product__basket-button')) {
    productButton = e.target.closest('.product__basket-button');
    getCountsOfProducts(productButton, '.top-bar__user-count--basket', 'product__basket-button--active');
  }
}

export const addProductInList = {
  interactiveProductButtonsHandler: interactiveProductButtonsHandler,
  productListSelector: document.querySelector('.product__list'),
}
