(function () {
  const hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
  const sectionNav = document.querySelector('.top-bar__section-nav');
  const searchButton = document.querySelector('.top-bar__user-buttons-link--search');
  const searchInput = document.querySelector('.top-bar__user-search-input');

  function toggleHamburgerMenu(e) {
    e.preventDefault();
    if (!hamburgerMenu.classList.contains('top-bar__hamburger-menu--active')) {
      hamburgerMenu.classList.add('top-bar__hamburger-menu--active');
      sectionNav.classList.add('top-bar__section-nav--active');
      return;
    }
    hamburgerMenu.classList.remove('top-bar__hamburger-menu--active');
    sectionNav.classList.remove('top-bar__section-nav--active');
  }

  hamburgerMenu.addEventListener('click', toggleHamburgerMenu);

  function toggleSearchInput () {
    searchInput.classList.toggle('top-bar__user-search-input--active');
  }

  searchButton.addEventListener('click', toggleSearchInput);
})();
