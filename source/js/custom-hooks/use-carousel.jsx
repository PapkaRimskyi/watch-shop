// Кастомный хук. Создан для слайдеров.
export default function useCarousel(arrowsHandler) {
  // Возвращается функция-обработчик, которая потом передается кнопкам слайдера.

  return function carouselHandler(e) {
    e.preventDefault();
    const classListString = e.currentTarget.classList.value;
    if (e.currentTarget.tagName === 'BUTTON') {
      if (classListString.includes('--left')) {
        arrowsHandler('left');
      } else {
        arrowsHandler('right');
      }
    }
  };

  //
}
