import {filterSearchAlert} from './filterSearchAlert.js';
import {resetFilterStyle} from './resetFilterStyle.js';

const formFilter = document.querySelector('.filter__form');
const productList = document.querySelector('.product__list');
const brendFilter = formFilter.firstElementChild.nextElementSibling;

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

function filterHandler(e) {
  let activated = false;
  if (e.tagName === 'INPUT' || e.classList.contains('filter__range-button')) {
    activated = true;
    let productCollection = productList.querySelectorAll('.product__item-card');
    let priceCollection = formFilter.querySelectorAll('.filter__range-price');
    resetFilterStyle.resetProductStyles(productCollection);
    if (activated) {
      for (let item of productCollection) {
        if (+priceCollection[0].textContent <= +item.querySelector('.product__price').textContent.match(/\d+/g).join('') && +item.querySelector('.product__price').textContent.match(/\d+/g).join('') <= +priceCollection[1].textContent) {
          if (getOptionsChecked().length) {
            if (checkProductValue(item.querySelector('.product__name').textContent.toUpperCase())) {
              continue;
            } else {
              item.style.display = 'none';
              continue;
            }
          }
          continue;
        }
        item.style.display = 'none';
      }
    }
    filterSearchAlert.renderSearchNotification(productCollection);
  }
}

export const checkboxFilterHandler = {
  formFilterSelector: formFilter,
  productListSelector: productList,
  filterHandler: filterHandler,
}
