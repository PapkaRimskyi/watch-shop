import '../styles/style.scss';
import {hamburgerFunctionality, siteSearchFunctionality} from './js_module/headerSiteFunctionality.js';
import {arrowSwitchSlider} from './js_module/arrowSwitchSlider.js';

hamburgerFunctionality.hamburgerMenuSelector.addEventListener('click', hamburgerFunctionality.toggleHamburgerMenu);
siteSearchFunctionality.searchButtonSelector.addEventListener('click', siteSearchFunctionality.toggleSearchInput);

arrowSwitchSlider.mainSectionSelector.addEventListener('click', arrowSwitchSlider.switchArrowHandler);
