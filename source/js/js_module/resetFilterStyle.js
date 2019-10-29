import {priceFilterValues, setPriceSegmentStyle} from './rangePriceFilterHandler.js';
import {filterSearchAlert} from './filterSearchAlert.js';

const resetButton = document.querySelector('.filter__reset-button');
const priceSegment = document.querySelector('.filter__price-segment-line');
const rangeLine = document.querySelector('.filter__range-line');

function resetPinStyle() {
  for (let button of document.querySelectorAll('.filter__range-button')) {
    if (button.classList.contains('filter__range-button--from')) {
      button.style.left = `${priceFilterValues.minPinPosition}px`;
      button.querySelector('.filter__range-price').textContent = priceFilterValues.minPrice;
    } else {
      priceFilterValues.findMaxPinPosition(rangeLine, button);
      button.style.left = `${priceFilterValues.maxPinPosition}px`;
      button.querySelector('.filter__range-price').textContent = priceFilterValues.maxPrice;
    }
    setPriceSegmentStyle(priceSegment);
  }
}

function resetProductStyles(productCollection) {
  for (let item of productCollection) {
    item.style = '';
  }
  filterSearchAlert.renderSearchNotification(productCollection);
}

export const resetFilterStyle = {
  resetButtonSelector: resetButton,
  resetPinStyle: resetPinStyle,
  resetProductStyles: resetProductStyles,
}
