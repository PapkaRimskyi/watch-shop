'use strict';

(function () {
  var hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
  var sectionNav = document.querySelector('.top-bar__section-nav');
  var searchButton = document.querySelector('.top-bar__user-buttons-link--deploy-search');
  var searchInput = document.querySelector('.top-bar__user-search-input');

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
