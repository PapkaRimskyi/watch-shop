const sortContainer = document.querySelector('.catalog-name-and-sort__sort-container');
const productList = document.querySelector('.product__list');

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

export const sortProduct = {
  sortContainerSelector: sortContainer,
  showSortList: showSortList,
}
