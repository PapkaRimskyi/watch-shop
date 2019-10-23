export const hamburgerFunctionality = {
  toggleHamburgerMenu: toggleHamburgerMenu,
  hamburgerMenu: document.querySelector('.top-bar__hamburger-menu'),
  sectionNav: document.querySelector('.top-bar__section-nav'),
}

export const siteSearchFunctionality = {
  toggleSearchInput: toggleSearchInput,
  searchButton: document.querySelector('.top-bar__user-buttons-link--search'),
  searchInput: document.querySelector('.top-bar__user-search-input'),
}

function toggleHamburgerMenu(e) {
  e.preventDefault();
  if (!hamburgerFunctionality.hamburgerMenu.classList.contains('top-bar__hamburger-menu--active')) {
    hamburgerFunctionality.hamburgerMenu.classList.add('top-bar__hamburger-menu--active');
    hamburgerFunctionality.sectionNav.classList.add('top-bar__section-nav--active');
    return;
  }
  hamburgerFunctionality.hamburgerMenu.classList.remove('top-bar__hamburger-menu--active');
  hamburgerFunctionality.sectionNav.classList.remove('top-bar__section-nav--active');
}

function toggleSearchInput(e) {
  e.preventDefault();
  siteSearchFunctionality.searchInput.classList.toggle('top-bar__user-search-input--active');
}