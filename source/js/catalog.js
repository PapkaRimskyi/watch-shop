(function () {
  const sortContainer = document.querySelector('.catalog-name-and-sort__sort-container');
  const formFilter = document.querySelector('.filter__form');
  const productList = document.querySelector('.product__list');
  const userButtonsList = document.querySelector('.top-bar__user-buttons-list');

  function removeSortActive() {
    let sortTypeItem = document.querySelectorAll('.catalog-name-and-sort__list-item-link');
    for (let i = 0; i < sortTypeItem.length; i++) {
      sortTypeItem[i].classList.remove('catalog-name-and-sort__sort-type--active');
    }
  }

  function sortTypeHandler(e) {
    let target = e.target;
    if (target.tagName === 'A') {
      e.preventDefault();
      if (!target.classList.contains('catalog-name-and-sort__sort-type--active')) {
        document.querySelector('.catalog-name-and-sort__sort-type').textContent = target.textContent;
        removeSortActive();
        target.classList.add('catalog-name-and-sort__sort-type--active');
      }
    }
  }

  function showSortList(e) {
    e.preventDefault();
    let target = e.target;
    if (target.classList.contains('catalog-name-and-sort__sort-type')) {
      let listOptions = document.querySelector('.catalog-name-and-sort__list-options');
      if (!listOptions.classList.contains('catalog-name-and-sort__list-options--active')) {
        listOptions.classList.add('catalog-name-and-sort__list-options--active');
        listOptions.addEventListener('click', sortTypeHandler);
        return;
      }
      listOptions.classList.remove('catalog-name-and-sort__list-options--active');
      listOptions.removeEventListener('click', sortTypeHandler);
    }
  }

  sortContainer.addEventListener('click', showSortList);

  //Add data attribute//

  function addProductNumbering() {
    let productCollection = productList.children;
    for (let i = 0; i < productCollection.length; i++) {
      productCollection[i].setAttribute('data-product', i);
    }
  }

  addProductNumbering();

  //Open or close product filter section//

  function checkboxSectionKeyDownHandler(e) {
    if (document.activeElement.tagName === 'LEGEND' && e.code === 'Enter') {
      let target = document.activeElement;
      toggleCheckboxSection(target);
    }
  }

  function checkboxSectionClickHandler(e) {
    let target = e.target;
    if (target.tagName === 'LEGEND') {
      toggleCheckboxSection(target);
    }
  }

  function toggleCheckboxSection(target) {
    let parentLegend = target.parentNode;
    if (target.classList.contains('filter__legend--open')) {
      target.classList.remove('filter__legend--open');
      target.classList.add('filter__legend--close');
      parentLegend.lastElementChild.classList.add('filter__option-list--display');
      return;
    }
    target.classList.remove('filter__legend--close');
    target.classList.add('filter__legend--open');
    parentLegend.lastElementChild.classList.remove('filter__option-list--display');
  }

  formFilter.addEventListener('click', checkboxSectionClickHandler);
  formFilter.addEventListener('keydown', checkboxSectionKeyDownHandler);

  //User button handler//

  function addNothingToShowAnimation(button) {
    button.classList.add('top-bar__user-button-animation');
    setTimeout(() => {
      button.classList.remove('top-bar__user-button-animation');
    }, 205);
  }

  function findTargetClosest(cssClass, target, returnElem) {
    for (let value of cssClass) {
      if (target.closest('.' + value)) {
        if (returnElem) {
          return target.closest('.' + value);
        }
        return true;
      }
    }
    return false;
  }

  function isClosedAnotherWindow(cssClass, button) {
    let anotherUserButton;
    for (let value of cssClass) {
      if (!button.classList.contains(value)) {
        anotherUserButton = '.' + value;
        break;
      }
    }
    let userCollectionItem = document.querySelector(anotherUserButton).nextElementSibling;
    if (userCollectionItem.classList.contains('user-collection--display')) {
      userCollectionItem.classList.remove('user-collection--display');
    }
  }

  function userButtonsHandler(e) {
    e.preventDefault();
    const linkClass = ['top-bar__user-buttons-link--favorites', 'top-bar__user-buttons-link--basket'];
    let target = e.target;
    if (findTargetClosest(linkClass, target)) {
      let linkButton = findTargetClosest(linkClass, target, true);
      if (linkButton.lastElementChild.textContent === '0') {
        addNothingToShowAnimation(linkButton);
      } else {
        let userList = linkButton.parentNode.querySelector('.user-collection');
        isClosedAnotherWindow(linkClass, linkButton);
        userList.classList.toggle('user-collection--display');
      }
    }
  }

  userButtonsList.addEventListener('click', userButtonsHandler);

  //Add in favorites or basket//

  function getProductInfo(interactiveButton) {
    let infoContainer = interactiveButton.closest('.product__list-item');
    return {
      productName: infoContainer.querySelector('.product__name').textContent,
      productPrice: infoContainer.querySelector('.product__price').textContent,
      productImgSrc: infoContainer.querySelector('.product__image').getAttribute('src'),
      productDataNumber: infoContainer.getAttribute('data-product'),
    }
  }

  function setProductInfo(template, info) {
    template.querySelector('li').setAttribute('data-product', info.productDataNumber);
    template.querySelector('img').src = info.productImgSrc;
    template.querySelector('.user-collection__name').textContent = info.productName;
    template.querySelector('.user-collection__price').textContent = info.productPrice;
  }

  function renderProduct(interactiveButton, userCountType) {
    let productInfo = getProductInfo(interactiveButton);
    let liTemplate = productTemplate.content;
    setProductInfo(liTemplate, productInfo);
    let contentContainer = document.querySelector(userCountType).closest('.top-bar__user-buttons-item').querySelector('.user-collection__list');
    contentContainer.append(liTemplate.cloneNode(true));
  }

  function checkForEmptyList(list, userCountType) {
    if (list.children.length === 0) {
      list.parentNode.classList.remove('user-collection--display');
    }
  }

  function deleteProduct(interactiveButton, userCountType) {
    let productNumber = interactiveButton.closest('.product__list-item').getAttribute('data-product');
    let listItem = document.querySelector(userCountType).parentNode.nextElementSibling.querySelector('.user-collection__list');
    let itemCollection = listItem.children;
    for (let i = 0; i < itemCollection.length; i++) {
      if (itemCollection[i].getAttribute('data-product') === productNumber) {
        itemCollection[i].remove();
      }
    }
    checkForEmptyList(listItem, userCountType);
  }

  function getCountsOfProducts(elem, elemCounter, status, interactiveButton) {
    let spanCounter = document.querySelector(elemCounter);
    if (elem.classList.contains(status)) {
      elem.classList.remove(status);
      --spanCounter.textContent;
      deleteProduct(interactiveButton, elemCounter);
      return;
    }
    elem.classList.add(status);
    ++spanCounter.textContent;
    renderProduct(interactiveButton, elemCounter);
  }

  function interactiveProductButtonsHandler(e) {
    e.preventDefault();
    let target = e.target;
    let productButton;
    if (target.closest('.product__like-button')) {
      productButton = target.closest('.product__like-button');
      getCountsOfProducts(productButton, '.top-bar__user-count--favorites', 'product__like-button--active', target);
    } else if (target.closest('.product__basket-button')) {
      productButton = target.closest('.product__basket-button');
      getCountsOfProducts(productButton, '.top-bar__user-count--basket', 'product__basket-button--active', target);
    }
  }

  productList.addEventListener('click', interactiveProductButtonsHandler);

})();
