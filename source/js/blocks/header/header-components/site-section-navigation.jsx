/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

export default function SiteSectionNav() {
  return (
    <nav className="site-section-navigation">
      <ul className="site-section-navigation__list">
        <li className="site-section-navigation__item">
          <Link to="/catalog" className="site-section-navigation__link">Каталог</Link>
        </li>
        <li className="site-section-navigation__item">
          <Link to=" " className="site-section-navigation__link">Акции</Link>
        </li>
        <li className="site-section-navigation__item">
          <Link to=" " className="site-section-navigation__link">Доставка</Link>
        </li>
        <li className="site-section-navigation__item">
          <Link to=" " className="site-section-navigation__link">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}
