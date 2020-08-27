import { useState, useEffect } from 'react';

export default function usePopupSwitch(popupClassName) {
  const [popupStatus, setPopupStatus] = useState(false);

  useEffect(() => {
    if (popupStatus) {
      document.addEventListener('click', isThatClickBeenOutsideElement);
    }
    return () => {
      document.removeEventListener('click', isThatClickBeenOutsideElement);
    };
  }, [popupStatus]);

  function popupButtonHandler(e) {
    e.preventDefault();
    setPopupStatus((prevState) => !prevState);
  }

  function keyDownHandler(e) {
    if (e.key === 'Enter') {
      popupButtonHandler(e);
    }
  }

  function isThatClickBeenOutsideElement(e) {
    if (!e.target.closest(`.${popupClassName}`)) {
      setPopupStatus((prevState) => !prevState);
    }
  }

  return { popupStatus, popupButtonHandler, keyDownHandler };
}
