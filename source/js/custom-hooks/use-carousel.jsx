export default function useCarousel(arrowsHandler) {
  function carouselHandler(e) {
    e.preventDefault();
    const classListString = e.currentTarget.classList.value;
    if (e.currentTarget.tagName === 'BUTTON') {
      if (classListString.includes('--left')) {
        arrowsHandler('left');
      } else {
        arrowsHandler('right');
      }
    }
  }

  return carouselHandler;
}
