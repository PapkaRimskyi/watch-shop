import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Перематывает страницу в самое начало, когда пользователь переходит на новую страницу.

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

//
