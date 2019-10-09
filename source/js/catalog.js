(function () {
  const sortContainer = document.querySelector('.catalog-name-and-sort__sort-container');
  const formFilter = document.querySelector('.filter__form');
  const productList = document.querySelector('.product__list');
  const userButtonsList = document.querySelector('.top-bar__user-buttons-list');

  //Add data attribute//

  function addProductNumbering() {
    let productCollection = productList.children;
    for (let i = 0; i < productCollection.length; i++) {
      productCollection[i].setAttribute('data-product', i);
    }
  }

  addProductNumbering();

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

  //Add in favorites or basket//

  function getProductInfo(interactiveProductButton) {
    let productInfoContainer = interactiveProductButton.closest('.product__list-item');
    return {
      productName: productInfoContainer.querySelector('.product__name').textContent,
      productPrice: productInfoContainer.querySelector('.product__price').textContent,
      productImgSrc: productInfoContainer.querySelector('.product__image').getAttribute('src'),
      productDataNumber: productInfoContainer.getAttribute('data-product'),
    }
  }

  function setProductInfo(template, info) {
    template.querySelector('li').setAttribute('data-product', info.productDataNumber);
    template.querySelector('img').src = info.productImgSrc;
    template.querySelector('.user-collection__name').textContent = info.productName;
    template.querySelector('.user-collection__price').textContent = info.productPrice;
  }

  function renderProduct(interactiveProductButton, userCountType) {
    let productInfo = getProductInfo(interactiveProductButton);
    let liTemplate = productTemplate.content;
    setProductInfo(liTemplate, productInfo);
    let userCollectionList = document.querySelector(userCountType).closest('.top-bar__user-buttons-item').querySelector('.user-collection__list');
    userCollectionList.append(liTemplate.cloneNode(true));
  }

  function checkForEmptyList(list) {
    if (list.children.length === 0) {
      list.parentNode.classList.remove('user-collection--display');
    }
  }

  function deleteProduct(interactiveProductButton, userCountType) {
    let productNumber = interactiveProductButton.closest('.product__list-item').getAttribute('data-product');
    let userCollectionList = document.querySelector(userCountType).parentNode.nextElementSibling.querySelector('.user-collection__list');
    let itemCollection = userCollectionList.children;
    for (let i = 0; i < itemCollection.length; i++) {
      if (itemCollection[i].getAttribute('data-product') === productNumber) {
        itemCollection[i].remove();
      }
    }
    checkForEmptyList(userCollectionList);
  }

  function getCountsOfProducts(productButton, counter, state, interactiveProductButton) {
    let spanCounter = document.querySelector(counter);
    if (productButton.classList.contains(state)) {
      productButton.classList.remove(state);
      --spanCounter.textContent;
      deleteProduct(interactiveProductButton, counter);
      return;
    }
    productButton.classList.add(state);
    ++spanCounter.textContent;
    renderProduct(interactiveProductButton, counter);
  }

  function interactiveProductButtonsHandler(e) {
    e.preventDefault();
    let productButton;
    if (e.target.closest('.product__like-button')) {
      productButton = e.target.closest('.product__like-button');
      getCountsOfProducts(productButton, '.top-bar__user-count--favorites', 'product__like-button--active', e.target);
    } else if (e.target.closest('.product__basket-button')) {
      productButton = e.target.closest('.product__basket-button');
      getCountsOfProducts(productButton, '.top-bar__user-count--basket', 'product__basket-button--active', e.target);
    }
  }

  productList.addEventListener('click', interactiveProductButtonsHandler);

  //Sort product//

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

})();
