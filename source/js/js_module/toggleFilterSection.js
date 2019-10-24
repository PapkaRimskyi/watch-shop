const formFilter = document.querySelector('.filter__form');

function filterSectionDisplayToggle(legendButton) {
  if (legendButton.classList.contains('filter__legend--open')) {
    legendButton.classList.remove('filter__legend--open');
    legendButton.classList.add('filter__legend--close');
    legendButton.nextElementSibling.classList.add('filter__option-list--display');
    return;
  }
  legendButton.classList.remove('filter__legend--close');
  legendButton.classList.add('filter__legend--open');
  legendButton.nextElementSibling.classList.remove('filter__option-list--display');
}

function checkboxSectionKeyDownHandler(e) {
  if (document.activeElement.tagName === 'LEGEND' && e.code === 'Enter') {
    filterSectionDisplayToggle(document.activeElement);
  }
}

function checkboxSectionClickHandler(e) {
  if (e.target.tagName === 'LEGEND') {
    filterSectionDisplayToggle(e.target);
  }
}

export const toggleFilterSection = {
  formFilterSelector: document.querySelector('.filter__form'),
  checkboxSectionClickHandler: checkboxSectionClickHandler,
  checkboxSectionKeyDownHandler: checkboxSectionKeyDownHandler,
}
