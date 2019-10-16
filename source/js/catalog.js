(function () {
  const sortContainer = document.querySelector('.catalog-name-and-sort__sort-container');
  const formFilter = document.querySelector('.filter__form');
  const productList = document.querySelector('.product__list');
  const userButtonsList = document.querySelector('.top-bar__user-buttons-list');
  const resetButton = formFilter.querySelector('.filter__reset-button');

  let productListObj = {
    watch1: {
      imgPath: 'img/product__product-img1.png',
      productProperties: {
        brand: 'Techne',
        price: 12700,
        mechanism: 'mechanical',
        material: 'steel',
        color: 'white',
      },
    },
    watch2: {
      imgPath: 'img/product__product-img2.png',
      productProperties: {
        brand: 'Techne',
        price: 12700,
        mechanism: 'mechanical',
        material: 'steel',
        color: 'black',
      },
    },
    watch3: {
      imgPath: 'img/product__product-img3.png',
      productProperties: {
        brand: 'Techne',
        price: 15700,
        mechanism: 'quartz',
        material: 'steel',
        color: 'black',
      },
    },
    watch4: {
      imgPath: 'img/product__product-img4.png',
      productProperties:  {
        brand: 'Techne',
        price: 15700,
        mechanism: 'quartz',
        material: 'steel',
        color: 'white',
      },
    },
    watch5: {
      imgPath: 'img/product__product-img5.png',
      productProperties:  {
        brand: 'Techne',
        price: 12700,
        mechanism: 'quartz',
        material: 'steel',
        color: 'black',
      },
    },
    watch6: {
      imgPath: 'img/product__product-img6.png',
      productProperties:  {
        brand: 'Techne',
        price: 18500,
        mechanism: 'quartz',
        material: 'titanium',
        color: 'white',
      },
    },
    watch7: {
      imgPath: 'img/product__product-img7.png',
      productProperties: {
        brand: 'Techne',
        price: 15700,
        mechanism: 'quartz',
        material: 'steel',
        color: 'white',
      },
    },
    watch8: {
      imgPath: 'img/product__product-img8.png',
      productProperties: {
        brand: 'Rado',
        price: 14700,
        mechanism: 'electronic',
        material: 'steel',
        color: 'black',
      },
    },
    watch9: {
      imgPath: 'img/product__product-img9.png',
      productProperties: {
        brand: 'Bvlgari',
        price: 72700,
        mechanism: 'quartz',
        material: 'titanium',
        color: 'white',
      },
    },
    watch10: {
      imgPath: 'img/product__product-img10.png',
      productProperties: {
        brand: 'Techne',
        price: 22700,
        mechanism: 'quartz',
        material: 'titanium',
        color: 'white',
      },
    },
    watch11: {
      imgPath: 'img/product__product-img11.png',
      productProperties: {
        brand: 'Rado',
        price: 22000,
        mechanism: 'electronic',
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

  function renderProductItems(itemInfo) {
    let template = document.getElementById('productListTemplate').content;
    for (let item in itemInfo) {
      let li = template.querySelector('li');
      let {productProperties} = itemInfo[item];
      template.querySelector('.product__name').textContent = productProperties.brand;
      template.querySelector('.product__price').textContent = `${productProperties.price}`.slice(0, 2) + ' ' + `${productProperties.price}`.slice(2) + ' Р';
      template.querySelector('.product__image').src = itemInfo[item].imgPath;
      for (let i = 0; i < Object.keys(productProperties).length; i++) {
        li.setAttribute(`data-${Object.keys(productProperties)[i]}`, Object.values(productProperties)[i]);
      }
      productList.append(template.cloneNode(true));
      addProductDataset();
    }
  }

  renderProductItems(productListObj);

  //Open or close product filter section//

  function filterSectionDisplayToggle(legendButton) {
    if (legendButton.classList.contains('filter__legend--open')) {
      legendButton.classList.remove('filter__legend--open');
      legendButton.classList.add('filter__legend--close');
      legendButton.nextElementSibling.classList.add('filter__option-list--display');
      return;
    }
    legendButton.classList.remove('filter__legend--close');
    legendButton.classList.add('filter__legend--open');
    legendButton.nextElementSibling.classList.remove('filter__option-list--display');
  }

  function checkboxSectionKeyDownHandler(e) {
    if (document.activeElement.tagName === 'LEGEND' && e.code === 'Enter') {
      filterSectionDisplayToggle(document.activeElement);
    }
  }

  function checkboxSectionClickHandler(e) {
    if (e.target.tagName === 'LEGEND') {
      filterSectionDisplayToggle(e.target);
    }
  }

  formFilter.addEventListener('click', checkboxSectionClickHandler);
  formFilter.addEventListener('keydown', checkboxSectionKeyDownHandler);

  //User button handler//

  function emptyUserListAnimation(userButton) {
    userButton.classList.add('top-bar__user-button-animation');
    setTimeout(() => {
      userButton.classList.remove('top-bar__user-button-animation');
    }, 205);
  }

  function findUserButton(userButtonClasses, userButton, returnElem) {
    for (let value of userButtonClasses) {
      if (userButton.closest('.' + value)) {
        if (returnElem) {
          return userButton.closest('.' + value);
        }
        return true;
      }
    }
    return false;
  }

  function isAnotherUserListClosed(userButtonClasses, userButton) {
    let anotherUserButton;
    for (let value of userButtonClasses) {
      if (!userButton.classList.contains(value)) {
        anotherUserButton = '.' + value;
        break;
      }
    }
    let userCollectionContainer = document.querySelector(anotherUserButton).nextElementSibling;
    if (userCollectionContainer.classList.contains('user-collection--display')) {
      userCollectionContainer.classList.remove('user-collection--display');
    }
  }

  function userButtonsHandler(e) {
    e.preventDefault();
    const userButtonClasses = ['top-bar__user-buttons-link--favorites', 'top-bar__user-buttons-link--basket'];
    if (findUserButton(userButtonClasses, e.target)) {
      let userButton = findUserButton(userButtonClasses, e.target, true);
      if (userButton.lastElementChild.textContent === '0') {
        emptyUserListAnimation(userButton);
      } else {
        let userList = userButton.parentNode.querySelector('.user-collection');
        isAnotherUserListClosed(userButtonClasses, userButton);
        userList.classList.toggle('user-collection--display');
      }
    }
  }

  userButtonsList.addEventListener('click', userButtonsHandler);

  // //Add in favorites or basket//

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

  productList.addEventListener('click', interactiveProductButtonsHandler);

  //Sort product//

  function sortProductByPopular(a, b) {
    if (+a.getAttribute('data-popular') > +b.getAttribute('data-popular')) {
      return 1;
    } else if (+a.getAttribute('data-popular') === +b.getAttribute('data-popular')) {
      return 0;
    } else {
      return -1;
    }
  }

  function sortProductByPrice(a, b) {
    if (+a.querySelector('.product__price').textContent.match(/\d+/g).join('') > +b.querySelector('.product__price').textContent.match(/\d+/g).join('')) {
      return 1;
    } else if (+a.querySelector('.product__price').textContent.match(/\d+/g).join('') === +b.querySelector('.product__price').textContent.match(/\d+/g).join('')) {
      return 0;
    } else {
      return -1;
    }
  }

  function renderSortedProductList(sortedList) {
    for (let value of sortedList) {
      productList.append(value);
    }
  }

  function getStartSort() {
    let itemCollection = [...productList.children];
    switch(document.querySelector('.catalog-name-and-sort__sort-type').textContent) {
      case 'популярности':
        let sortedByPopular = itemCollection.sort(sortProductByPopular).reverse();
        productList.innerHTML = '';
        renderSortedProductList(sortedByPopular);
        break;
      case 'цене':
        let sortedByPrice = itemCollection.sort(sortProductByPrice);
        productList.innerHTML = '';
        renderSortedProductList(sortedByPrice);
        break;
    }
  }

  getStartSort();

  function sortListHandlerClicker(e) {
    let trackedContainer = document.querySelector('.catalog-name-and-sort__list-options');
    if (!trackedContainer.querySelector(`${e.target.tagName}`) && trackedContainer !== e.target) {
      trackedContainer.classList.remove('catalog-name-and-sort__list-options--active');
    }
  }

  function removeSortActive() {
    let sortTypeItem = document.querySelectorAll('.catalog-name-and-sort__list-item-link');
    for (let i = 0; i < sortTypeItem.length; i++) {
      sortTypeItem[i].classList.remove('catalog-name-and-sort__sort-type--active');
    }
  }

  function sortTypeHandler(e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      if (!e.target.classList.contains('catalog-name-and-sort__sort-type--active')) {
        document.querySelector('.catalog-name-and-sort__sort-type').textContent = e.target.textContent;
        removeSortActive();
        e.target.classList.add('catalog-name-and-sort__sort-type--active');
        getStartSort();
      }
    }
  }

  function showSortList(e) {
    e.preventDefault();
    if (e.target.classList.contains('catalog-name-and-sort__sort-type')) {
      let sortListOptions = document.querySelector('.catalog-name-and-sort__list-options');
      if (!sortListOptions.classList.contains('catalog-name-and-sort__list-options--active')) {
        sortListOptions.classList.add('catalog-name-and-sort__list-options--active');
        sortListOptions.addEventListener('click', sortTypeHandler);
        document.addEventListener('mouseup', sortListHandlerClicker);
        return;
      }
      sortListOptions.classList.remove('catalog-name-and-sort__list-options--active');
      sortListOptions.removeEventListener('click', sortTypeHandler);
      document.removeEventListener('mouseup', sortListHandlerClicker);
    }
  }

  sortContainer.addEventListener('click', showSortList);

  //Checkbox filter code//

  let brendFilter = formFilter.firstElementChild.nextElementSibling;

  function getOptionsChecked() {
    let inputCollection = [...brendFilter.querySelectorAll('.filter__checkbox-input')];
    return inputCollection.filter(function(item) {
      if (item.checked) {
        return item;
      }
    })
  }

  function checkProductValue(productValue) {
    let status = false;
    for (let inputChecked of getOptionsChecked()) {
      if (productValue === inputChecked.name.toUpperCase()) {
        status = true;
      }
    }
    return status;
  }

  function throwOffStyles(productCollection) {
    for (let item of productCollection) {
      item.style = '';
    }
  }

  function filterCheckboxHandler(e) {
    if (e.target.tagName === 'INPUT') {
      let productCollection = productList.querySelectorAll('.product__item-card');
      throwOffStyles(productCollection);
      if (getOptionsChecked().length) {
        for (let item of productCollection) {
          if (!checkProductValue(item.querySelector('.product__name').textContent.toUpperCase())) {
            item.style = 'display: none;';
          }
        }
      }
    }
  }

  brendFilter.addEventListener('click', filterCheckboxHandler);
  resetButton.addEventListener('click', function () {
    throwOffStyles(productList.querySelectorAll('.product__item-card'));
  });

  const rangeCostContainer = document.querySelector('.filter__range-cost');

  rangeCostContainer.addEventListener('mousedown', function(e) {
    const rangeLineFilterValues  = {
      minPinPosition: 0,
      maxPinPosition: 0,
      pinStep: 0,
      priceStep: 6000,
      maxPrice: 120000,
    };
    let pinButton;
    if (e.target.classList.contains('filter__range-button')) {
      pinButton = e.target;
      const rangeLine = rangeCostContainer.querySelector('.filter__range-line');
      let lineBetweenButtonsWidth = rangeCostContainer.querySelector('.filter__line-between-buttons').offsetWidth;
      rangeLineFilterValues.maxPinPosition = rangeLine.offsetWidth - (pinButton.offsetWidth / 2);
      rangeLineFilterValues.pinStep = (rangeLineFilterValues.maxPinPosition / rangeLineFilterValues.maxPrice) * rangeLineFilterValues.priceStep;
      let pinPosition = e.target.offsetLeft;
      let mousePosition = e.clientX;

      function dragPin(e) {
        e.preventDefault();
        let previousStep;
        let step;
        let shiftDifference = mousePosition - e.clientX;
        let newPinPosition = pinPosition - shiftDifference;
        if (newPinPosition >= rangeLineFilterValues.minPinPosition && newPinPosition <= rangeLineFilterValues.maxPinPosition) {
          step = Math.round(newPinPosition / rangeLineFilterValues.pinStep);
          if (typeof previousStep !== undefined && previousStep !== step) {
            pinButton.style.left = `${Math.round(step * rangeLineFilterValues.pinStep)}px`;
            previousStep = step;
          } else {
            pinButton.style.left = `${Math.round(step * rangeLineFilterValues.pinStep)}px`;
            previousStep = Math.round(newPinPosition / rangeLineFilterValues.pinStep);
          }
        }
      }

      function dropPin(e) {
        e.preventDefault();
        dragPin(e);
        document.removeEventListener('mousemove', dragPin);
        document.removeEventListener('mouseup', dropPin);
      }

      document.addEventListener('mousemove', dragPin);
      document.addEventListener('mouseup', dropPin);
    }
  });

})();
