import { useState, useEffect } from 'react';

export default function usePopupSwitch(popupClassName) {
  const [popupStatus, setPopupStatus] = useState(false);

  // Срабатывает после изменения popupStatus. Если true, то добавляет документу обработчик событий, который сработает, когда клик произойдет снаружи.
  // Так же возвращает функцию, которая отпишет слушатель.

  useEffect(() => {
    if (popupStatus) {
      document.addEventListener('click', isThatClickBeenOutsideElement);
    }
    return () => {
      document.removeEventListener('click', isThatClickBeenOutsideElement);
    };
  }, [popupStatus]);

  //

  // Обработчик событий по клику на кнопку.

  function popupButtonHandler(e) {
    e.preventDefault();
    setPopupStatus(!popupStatus);
  }

  //

  // Слушатель по нажатию на Enter.

  function keyDownHandler(e) {
    if (e.key === 'Enter') {
      popupButtonHandler(e);
    }
  }

  //

  // Если клик был за пределами нашего элемента, то окно с этим элементом закрывается.

  function isThatClickBeenOutsideElement(e) {
    if (!e.target.closest(`.${popupClassName}`)) {
      setPopupStatus(!popupStatus);
    }
  }

  //

  return { popupStatus, popupButtonHandler, keyDownHandler };
}
