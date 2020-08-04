import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../../../img/unique-icon/arrow.svg';

export default function Breadcrumbs() {
  return (
    <section className="breadcrumbs">
      <ul className="breadcrumbs__list" aria-label="Навигационная цепочка">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to=" " className="breadcrumbs__link">Каталог</Link>
        </li>
        <li className="breadcrumbs__item">
          <NavLink activeClassName="breadcrumbs__link--active" to="/catalog" className="breadcrumbs__link">Мужские часы</NavLink>
        </li>
      </ul>
    </section>
  );
}
