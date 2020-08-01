/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import { Link } from 'react-router-dom';

export default function SiteSectionNav(props) {
  const { popupListItemHandler } = props;
  return (
    <nav className="site-section-navigation">
      <ul className="site-section-navigation__list" onClick={popupListItemHandler}>
        <li className="site-section-navigation__item">
          <Link to="/catalog" className="site-section-navigation__link">Каталог</Link>
        </li>
        <li className="site-section-navigation__item">
          <Link to="/" className="site-section-navigation__link">Акции</Link>
        </li>
        <li className="site-section-navigation__item">
          <Link to="/" className="site-section-navigation__link">Доставка</Link>
        </li>
        <li className="site-section-navigation__item">
          <Link to="/" className="site-section-navigation__link">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}
