(function () {
  const advantagesSliderCollection = document.querySelectorAll('.advantages__slider-container');
  const advantagesLeftSwitchArrow = document.querySelector('.advantages__slider-button .slider-button__switch-link--left-arrow');
  const advantagesSliderCount = document.querySelector('.advantages__slider-button .slider-button__switch-count');
  const advantagesRightSwitchArrow = document.querySelector('.advantages__slider-button .slider-button__switch-link--right-arrow');
  const popularModelsCollection = document.querySelectorAll('.popular-models__product');
  const popularModelsLeftSwitchArrow = document.querySelector('.popular-models__slider-button .slider-button__switch-link--left-arrow');
  const popularModulsSliderCount = document.querySelector('.popular-models__slider-button .slider-button__switch-count');
  const popularModelsRightSwitchArrow = document.querySelector('.popular-models__slider-button .slider-button__switch-link--right-arrow');
  const mainSection = document.querySelector('.main');

  function checkIndex () {
    let index = 0;
    return function (itemCollection, value) {
      index+= value;
      if (index === itemCollection.length) {
        index = 0;
      }
      if (index < 0) {
        index = itemCollection.length - 1;
      }
      return index;
    }
  }

  let advantagesCheckIndex = checkIndex();
  let popularModelsCheckIndex = checkIndex();

  function switchSlider (itemCollection, value, className, sliderCountItem, counter) {
    let index = counter(itemCollection, value);
    for (let i = 0; i < itemCollection.length; i++) {
      itemCollection[i].classList.remove(className);
    }
    itemCollection[index].classList.add(className);
    sliderCountItem.textContent = '0' + (index + 1);
  }

  function switchArrowHandler(e) {
    e.preventDefault();
    let target = e.target;
    if (target.closest('.slider-button__switch-link')) {
      let sliderButton = target.closest('.slider-button__switch-link');
      if (sliderButton.parentNode.classList.contains('advantages__slider-button')) {
        if (sliderButton.classList.contains('slider-button__switch-link--left-arrow')) {
          switchSlider(advantagesSliderCollection, -1, 'advantages__slider-container--active', advantagesSliderCount, advantagesCheckIndex);
        } else {
          switchSlider(advantagesSliderCollection, 1, 'advantages__slider-container--active', advantagesSliderCount, advantagesCheckIndex);
        }
      } else if (sliderButton.parentNode.classList.contains('popular-models__slider-button')) {
        if (sliderButton.classList.contains('slider-button__switch-link--left-arrow')) {
          switchSlider(popularModelsCollection, -1, 'popular-models__product--active', popularModulsSliderCount, popularModelsCheckIndex);
        } else {
          switchSlider(popularModelsCollection, 1, 'popular-models__product--active', popularModulsSliderCount, popularModelsCheckIndex);
        }
      }
    }
  }

  mainSection.addEventListener('click', switchArrowHandler);

  // advantagesRightSwitchArrow.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   switchSlider(advantagesSliderCollection, 1, 'advantages__slider-container--active', advantagesSliderCount, advantagesCheckIndex);
  // });

  // advantagesLeftSwitchArrow.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   switchSlider(advantagesSliderCollection, -1, 'advantages__slider-container--active', advantagesSliderCount, advantagesCheckIndex);
  // });

  // popularModelsRightSwitchArrow.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   switchSlider(popularModelsCollection, 1, 'popular-models__product--active', popularModulsSliderCount, popularModelsCheckIndex);
  // });

  // popularModelsLeftSwitchArrow.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   switchSlider(popularModelsCollection, -1, 'popular-models__product--active', popularModulsSliderCount, popularModelsCheckIndex);
  // });
})();
