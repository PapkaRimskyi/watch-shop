(function () {
  let hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
  let sectionNav = document.querySelector('.top-bar__section-nav');
  let searchButton = document.querySelector('.top-bar__user-buttons-link--deploy-search');
  let searchInput = document.querySelector('.top-bar__user-search-input');
  let advantagesSliderCollection = document.querySelectorAll('.advantages__slider-container');
  let advantagesLeftSwitchArrow = document.querySelector('.advantages__slider-button .slider-button__switch-link--left-arrow');
  let advantagesSliderCount = document.querySelector('.advantages__slider-button .slider-button__switch-count');
  let advantagesRightSwitchArrow = document.querySelector('.advantages__slider-button .slider-button__switch-link--right-arrow');
  let popularModelsCollection = document.querySelectorAll('.popular-models__product');
  let popularModelsLeftSwitchArrow = document.querySelector('.popular-models__slider-button .slider-button__switch-link--left-arrow');
  let popularModulsSliderCount = document.querySelector('.popular-models__slider-button .slider-button__switch-count');
  let popularModelsRightSwitchArrow = document.querySelector('.popular-models__slider-button .slider-button__switch-link--right-arrow');
  let index = 0;


  function toggleHamburgerMenu (evt) {
    evt.preventDefault();
    if (!sectionNav.classList.contains('top-bar__section-nav--active')) {
      hamburgerMenu.style.transform = 'rotate(360deg)';
      sectionNav.classList.toggle('top-bar__section-nav--active');
    } else {
      hamburgerMenu.style.transform = 'rotate(0deg)';
      sectionNav.classList.toggle('top-bar__section-nav--active');
    }
  }

  hamburgerMenu.addEventListener('click', toggleHamburgerMenu);

  function toggleSearchInput () {
    searchInput.classList.toggle('top-bar__user-search-input--active');
  }

  searchButton.addEventListener('click', toggleSearchInput);

  function checkIndex (itemCollection, value) {
    index+= value;
    if (index === itemCollection.length) {
      index = 0;
    }
    if (index < 0) {
      index = itemCollection.length - 1;
    }
  }

  function switchSlider (itemCollection, value, className, sliderCountItem) {
    checkIndex(itemCollection, value);
    for (let i = 0; i < itemCollection.length; i++) {
      itemCollection[i].classList.remove(className);
    }
    itemCollection[index].classList.add(className);
    sliderCountItem.textContent = '0' + (index + 1);
  }

  advantagesRightSwitchArrow.addEventListener('click', function(evt) {
    evt.preventDefault();
    switchSlider(advantagesSliderCollection, 1, 'advantages__slider-container--active', advantagesSliderCount);
  });

  advantagesLeftSwitchArrow.addEventListener('click', function(evt) {
    evt.preventDefault();
    switchSlider(advantagesSliderCollection, -1, 'advantages__slider-container--active', advantagesSliderCount);
  });

  popularModelsRightSwitchArrow.addEventListener('click', function(evt) {
    evt.preventDefault();
    switchSlider(popularModelsCollection, 1, 'popular-models__product--active', popularModulsSliderCount);
  });

  popularModelsLeftSwitchArrow.addEventListener('click', function(evt) {
    evt.preventDefault();
    switchSlider(popularModelsCollection, -1, 'popular-models__product--active', popularModulsSliderCount);
  });

})();
