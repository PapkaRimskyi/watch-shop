// Функция, которая проверяет, записан ли продукт в коллекцию userSelectedProducts. Возвращает булево значение.

export default function isProductAlreadySelected(productID, selectedProductsCollection, buttonType) {
  return selectedProductsCollection[buttonType].find((product) => product.id === productID);
}

//
