(function () {
  let hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
  let sectionNav = document.querySelector('.top-bar__section-nav');
  let searchButton = document.querySelector('.top-bar__user-buttons-link--deploy-search');
  let searchInput = document.querySelector('.top-bar__user-search-input');
  let sliderCollection = document.querySelectorAll('.advantages__slider-container');
  let leftSwitchArrow = document.querySelector('.advantages__switch-link--left-arrow');
  let rightSwitchArrow = document.querySelector('.advantages__switch-link--right-arrow');
  let index = 0;


  function toggleHamburgerMenu () {
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

  function switchSlider (itemCollection, value) {
    checkIndex(itemCollection, value);
    for (let i = 0; i < itemCollection.length; i++) {
      itemCollection[i].classList.remove('advantages__slider-container--active');
    }
    itemCollection[index].classList.add('advantages__slider-container--active');
  }

  rightSwitchArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    switchSlider(sliderCollection, 1);
  });

  leftSwitchArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    switchSlider(sliderCollection, -1);
  });

})();
