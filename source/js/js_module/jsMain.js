'use strict';

(function () {
  var hamburgerMenu = document.querySelector('.top-bar__hamburger-menu');
  var sectionNav = document.querySelector('.top-bar__section-nav');

  function toggleHamburgerMenu () {
    if (hamburgerMenu.classList.contains('top-bar__hamburger-menu--openBurger')) {
      hamburgerMenu.classList.add('top-bar__hamburger-menu--closeBurger');
      hamburgerMenu.classList.remove('top-bar__hamburger-menu--openBurger');
    } else {
      hamburgerMenu.classList.add('top-bar__hamburger-menu--openBurger');
      hamburgerMenu.classList.remove('top-bar__hamburger-menu--closeBurger');
    }
    sectionNav.classList.toggle('top-bar__section-nav--active');
  };

  hamburgerMenu.addEventListener('click', toggleHamburgerMenu);
})();
