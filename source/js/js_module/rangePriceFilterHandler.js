import {checkboxFilterHandler} from './checkboxFilterHandler.js';

const rangeCostContainer = document.querySelector('.filter__range-cost');
const rangeLine = rangeCostContainer.querySelector('.filter__range-line');
const priceSegment = rangeCostContainer.querySelector('.filter__price-segment-line');
export const priceFilterValues = {
  minPinPosition: 0,
  maxPinPosition: 0,
  stepSize: 0,
  priceStep: 6000,
  minPrice: 0,
  maxPrice: 120000,
  findMaxPinPosition(rangeLine, currentPin) {
    this.maxPinPosition = rangeLine.offsetWidth - (currentPin.offsetWidth / 2);
  },
  findStepSize() {
    this.stepSize = (this.maxPinPosition / this.maxPrice) * this.priceStep;
  },
  findUnusedPinStep(unusedPin) {
    return Math.round(unusedPin.offsetLeft / this.stepSize);
  },
  findStep(newPinPosition) {
    return Math.round(newPinPosition / this.stepSize);
  },
  setPinCoords(currentStep) {
    return `${Math.round(currentStep * this.stepSize)}px`;
  }
};

function setDefaultMinMaxPrice() {
  const inputPriceCollection = rangeCostContainer.querySelectorAll('.filter__range-price');
  for (let input of inputPriceCollection) {
    if (input.classList.contains('filter__range-price--from')) {
      input.textContent = priceFilterValues.minPrice;
      continue;
    }
    input.textContent = priceFilterValues.maxPrice;
  }
}

setDefaultMinMaxPrice();

function setPinPrice(currentStep, priceStep, currentPin) {
  currentPin.firstElementChild.textContent = currentStep * priceStep;
  currentPin.firstElementChild.style.left = `${currentPin.offsetWidth - (currentPin.offsetWidth * 2.7)}px`;
}

export function setPriceSegmentStyle(priceSegment) {
  let pinFrom = rangeCostContainer.querySelector('.filter__range-button--from');
  let pinTo = rangeCostContainer.querySelector('.filter__range-button--to');
  priceSegment.style.width = `${Math.abs(pinTo.offsetLeft - pinFrom.offsetLeft)}px`;
  priceSegment.style.left = `${pinFrom.offsetLeft + (pinFrom.offsetWidth / 2)}px`;
}

function setDistanceBetweenPins(unusedPin, currentStep, priceFilterValues) {
  if (unusedPin.classList.contains('filter__range-button--from') && priceFilterValues.findUnusedPinStep(unusedPin) < currentStep - 1 && priceFilterValues.findUnusedPinStep(unusedPin) !== currentStep + 1) {
    return true;
  } else if (unusedPin.classList.contains('filter__range-button--to') && priceFilterValues.findUnusedPinStep(unusedPin) > currentStep + 1 && priceFilterValues.findUnusedPinStep(unusedPin) !== currentStep - 1) {
    return  true;
  } else {
    return false;
  }
}

function findUnusedPin(currentPin, currentStep, priceFilterValues) {
  const pinModifierCollection = ['filter__range-button--from', 'filter__range-button--to'];
  for (let modifier of pinModifierCollection) {
    if (!currentPin.classList.contains(modifier)) {
      let unusedPin = rangeCostContainer.querySelector(`.${modifier}`);
      return setDistanceBetweenPins(unusedPin, currentStep, priceFilterValues);
    }
  }
}

function setMouseDownPinHandler() {
  rangeCostContainer.addEventListener('mousedown', function(e) {
    e.preventDefault();
    let currentPin;
    if (e.target.classList.contains('filter__range-button')) {
      currentPin = e.target;
      let pinPosition = e.target.offsetLeft;
      let mousePosition = e.clientX;
      priceFilterValues.findMaxPinPosition(rangeLine, currentPin);
      priceFilterValues.findStepSize();

      function dragPin(e) {
        let nextStep, currentStep;
        let shiftDifference = mousePosition - e.clientX;
        let newPinPosition = pinPosition - shiftDifference;
        if (newPinPosition >= priceFilterValues.minPinPosition && newPinPosition <= priceFilterValues.maxPinPosition) {
          currentStep = priceFilterValues.findStep(newPinPosition);
          if (findUnusedPin(currentPin, currentStep, priceFilterValues)) {
            if (typeof nextStep !== undefined && nextStep !== currentStep) {
              nextStep = currentStep;
            } else {
              nextStep = priceFilterValues.findStep(newPinPosition);
            }
            currentPin.style.left = priceFilterValues.setPinCoords(currentStep);
            setPriceSegmentStyle(priceSegment);
            setPinPrice(currentStep, priceFilterValues.priceStep, currentPin);
          }
        }
      }

      function dropPin(e) {
        dragPin(e);
        checkboxFilterHandler.filterHandler(currentPin);
        document.removeEventListener('mousemove', dragPin);
        document.removeEventListener('mouseup', dropPin);
      }

      document.addEventListener('mousemove', dragPin);
      document.addEventListener('mouseup', dropPin);
    }
  });
}

function setKeyDownPinHandler() {
  rangeCostContainer.addEventListener('keydown', function(e) {
    let currentPin;
    if (e.code === 'ArrowRight' || e.code === 'ArrowLeft' && e.target.classList.contains('filter__range-button')) {
      currentPin = e.target;
      let pinPosition = e.target.offsetLeft;
      priceFilterValues.findMaxPinPosition(rangeLine, e.target);
      priceFilterValues.findStepSize();
      let currentStep = priceFilterValues.findStep(pinPosition);
      let nextStep;

      function rangeCostKeyDownHandler(e) {
        e.preventDefault();
        if (e.code === 'ArrowRight' && Math.round(pinPosition + priceFilterValues.stepSize) <= priceFilterValues.maxPinPosition) {
          nextStep = currentStep + 1;
          if (findUnusedPin(e.target, nextStep, priceFilterValues)) {
            e.target.style.left = `${Math.round(pinPosition + priceFilterValues.stepSize)}px`;
            setPinPrice(nextStep, priceFilterValues.priceStep, e.target);
          }
        } else if (e.code === 'ArrowLeft' && Math.round(pinPosition - priceFilterValues.stepSize) >= priceFilterValues.minPinPosition) {
          nextStep = currentStep - 1;
          if (findUnusedPin(e.target, nextStep, priceFilterValues)) {
            e.target.style.left = `${Math.round(pinPosition - priceFilterValues.stepSize)}px`;
            setPinPrice(nextStep, priceFilterValues.priceStep, e.target);
          }
        }
        setPriceSegmentStyle(priceSegment);
      }

      function rangeCostKeyUpHandler(e) {
        e.preventDefault();
        rangeCostKeyDownHandler(e);
        checkboxFilterHandler.filterHandler(currentPin);
        document.removeEventListener('keydown', rangeCostKeyDownHandler);
        document.removeEventListener('keyup', rangeCostKeyUpHandler);
      }

      document.addEventListener('keydown', rangeCostKeyDownHandler);
      document.addEventListener('keyup', rangeCostKeyUpHandler);
    }
  });
}

export const rangePriceFilterHandler = {
  setMouseDownPinHandler: setMouseDownPinHandler,
  setKeyDownPinHandler: setKeyDownPinHandler,
}
