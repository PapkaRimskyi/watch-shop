(function () {
  const sortContainer = document.querySelector('.catalog-name-and-sort__sort-container');
  const formFilter = document.querySelector('.filter__form');
  const productList = document.querySelector('.product__list');

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

  //Add in favorites or basket//

  function getCountsOfProducts(elem, elemCounter, status) {
    let spanCounter = document.querySelector(elemCounter);
    if (elem.classList.contains(status)) {
      elem.classList.remove(status);
      --spanCounter.textContent;
      return;
    }
    elem.classList.add(status);
    ++spanCounter.textContent;
  }

  function interactiveButtonHandler(e) {
    e.preventDefault();
    let target = e.target;
    if (target.closest('.product__like-button')) {
      let productLikeButton = target.closest('.product__like-button');
      getCountsOfProducts(productLikeButton, '.top-bar__user-count--like', 'product__like-button--active');
    } else if (target.closest('.product__basket-button')) {
      let productBasketButton = target.closest('.product__basket-button');
      getCountsOfProducts(productBasketButton, '.top-bar__user-count--basket', 'product__basket-button--active');
    }
  }

  productList.addEventListener('click', interactiveButtonHandler);
})();
