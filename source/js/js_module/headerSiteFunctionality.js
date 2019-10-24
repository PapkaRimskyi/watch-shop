const sectionNav = document.querySelector('.top-bar__section-nav');
const searchInput = document.querySelector('.top-bar__user-search-input');
const hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
const searchButton = document.querySelector('.top-bar__user-buttons-link--search');

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

function toggleSearchInput(e) {
  e.preventDefault();
  searchInput.classList.toggle('top-bar__user-search-input--active');
}

export const hamburgerFunctionality = {
  hamburgerMenuSelector: hamburgerMenu,
  toggleHamburgerMenu: toggleHamburgerMenu,
}

export const siteSearchFunctionality = {
  searchButtonSelector: searchButton,
  toggleSearchInput: toggleSearchInput,
}
