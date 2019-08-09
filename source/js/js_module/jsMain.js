(function () {
  let hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
  let sectionNav = document.querySelector('.top-bar__section-nav');
  let searchButton = document.querySelector('.top-bar__user-buttons-link--deploy-search');
  let searchInput = document.querySelector('.top-bar__user-search-input');
  let switchContainer = document.querySelector('.advantages__switch');
  let switchLeft = switchContainer.querySelector('.advantages__switch-link--left-arrow');
  let switchRight = switchContainer.querySelector('.advantages__switch-link--right-arrow');
  let contentSliders = document.querySelectorAll('.advantages__slider-container');
  let indexSlider = 0;


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

})();
