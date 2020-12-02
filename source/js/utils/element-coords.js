// Позволяет скролить страницу до нужного элемента.

export default function elementCoords(elem) {
  const elementInformation = elem.getBoundingClientRect();
  return {
    top: Math.round(elementInformation.top + window.pageYOffset),
    left: Math.round(elementInformation.left + window.pageXOffset),
  };
}

//
