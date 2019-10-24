function checkProductItemOnVisibility(productCollection) {
  for (let item of productCollection) {
    if (item.style.display !== 'none') {
      return false;
    }
  }
  return true;
}

function renderSearchNotification(productCollection) {
  const productPagination = document.querySelector('.product__pagination');
  const productList = document.querySelector('.product__list');
  if (checkProductItemOnVisibility(productCollection) && !productList.querySelector('.search-notification')) {
    let div = document.createElement('div');
    div.classList.add('search-notification');
    div.textContent = 'Упс, похоже такого товара у нас нет.';
    div.style = 'margin: 0 auto; font-size: 24px; line-height: 24px; text-align: center;';
    productList.prepend(div);
    productPagination.style.display = 'none';
  } else if (!checkProductItemOnVisibility(productCollection) && productList.querySelector('.search-notification')) {
    productList.querySelector('.search-notification').remove();
    productPagination.style.display = 'flex';
  }
}

export const filterSearchAlert = {
  renderSearchNotification: renderSearchNotification,
}
