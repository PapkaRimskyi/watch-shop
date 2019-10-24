import {hamburgerFunctionality, siteSearchFunctionality} from './js_module/headerSiteFunctionality.js';
import {renderProductList} from './js_module/renderProductList.js';
import {toggleFilterSection} from './js_module/toggleFilterSection.js';
import {customButtonsHandler} from './js_module/customButtonsHandler.js';
import {addProductInList} from './js_module/addProductInList.js';
import {sortProduct} from './js_module/sortProduct.js';
import {checkboxFilterHandler} from './js_module/checkboxFilterHandler.js';
import {rangePriceFilterHandler} from './js_module/rangePriceFilterHandler.js';
import {resetFilterStyle} from './js_module/resetFilterStyle.js';

hamburgerFunctionality.hamburgerMenuSelector.addEventListener('click', hamburgerFunctionality.toggleHamburgerMenu);
siteSearchFunctionality.searchButtonSelector.addEventListener('click', siteSearchFunctionality.toggleSearchInput);

renderProductList.renderProductListFunc(renderProductList.productInfoCollection);

toggleFilterSection.formFilterSelector.addEventListener('click', toggleFilterSection.checkboxSectionClickHandler);
toggleFilterSection.formFilterSelector.addEventListener('keydown', toggleFilterSection.checkboxSectionKeyDownHandler);

customButtonsHandler.userButtonsListSelector.addEventListener('click', customButtonsHandler.userButtonsHandler);

addProductInList.productListSelector.addEventListener('click', addProductInList.interactiveProductButtonsHandler);

sortProduct.sortContainerSelector.addEventListener('click', sortProduct.showSortList);

checkboxFilterHandler.formFilterSelector.addEventListener('click', function(e) {
  checkboxFilterHandler.filterHandler(e.target);
});

resetFilterStyle.resetButtonSelector.addEventListener('click', function() {
  resetFilterStyle.resetProductStyles(checkboxFilterHandler.productListSelector.querySelectorAll('.product__item-card'));
  resetFilterStyle.resetPinStyle();
});

rangePriceFilterHandler.setMouseDownPinHandler();
rangePriceFilterHandler.setKeyDownPinHandler();
