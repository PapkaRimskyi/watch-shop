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


  function toggleHamburgerMenu (e) {
    e.preventDefault();
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

  if (window.location.href.includes('index.html')) {
    advantagesRightSwitchArrow.addEventListener('click', function(e) {
      e.preventDefault();
      switchSlider(advantagesSliderCollection, 1, 'advantages__slider-container--active', advantagesSliderCount);
    });

    advantagesLeftSwitchArrow.addEventListener('click', function(e) {
      e.preventDefault();
      switchSlider(advantagesSliderCollection, -1, 'advantages__slider-container--active', advantagesSliderCount);
    });

    popularModelsRightSwitchArrow.addEventListener('click', function(e) {
      e.preventDefault();
      switchSlider(popularModelsCollection, 1, 'popular-models__product--active', popularModulsSliderCount);
    });

    popularModelsLeftSwitchArrow.addEventListener('click', function(e) {
      e.preventDefault();
      switchSlider(popularModelsCollection, -1, 'popular-models__product--active', popularModulsSliderCount);
    });
  }

  //Блок с сортировкой//

  const sortContainer = document.querySelector('.catalog-name-and-sort__sort-container');

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

  //Блок кода с открытием/закрытием разделов фильтра//

  const formFilter = document.querySelector('.filter__form');

  function toggleCheckboxSection(e) {
    let target = e.target;
    if (target.tagName === 'LEGEND') {
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
  }

  formFilter.addEventListener('click', toggleCheckboxSection);

})();
