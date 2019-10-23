import './js_module/catalogModule.js';
import {hamburgerFunctionality, siteSearchFunctionality} from './js_module/headerSiteFunctionality.js';

hamburgerFunctionality.hamburgerMenu.addEventListener('click', hamburgerFunctionality.toggleHamburgerMenu);
siteSearchFunctionality.searchButton.addEventListener('click', siteSearchFunctionality.toggleSearchInput);
