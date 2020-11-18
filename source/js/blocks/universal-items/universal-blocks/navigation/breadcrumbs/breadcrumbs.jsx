import React from 'react';
// import PropTypes from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router-dom';

import '../../../../../../img/unique-icon/arrow.svg';

// Пришлоись внести проверку для product из location, так как я не придумал другого способа рендерить карточку товара динамически.

export default function Breadcrumbs() {
  const { pathname, product } = useLocation();
  const pathNameCollection = pathname.split('/').filter((item) => item);
  return (
    <section className="breadcrumbs">
      <ul className="breadcrumbs__list" aria-label="Навигационная цепочка">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Главная</Link>
        </li>
        {pathNameCollection.map((item, i) => (i !== pathNameCollection.length - 1 ? (
          <li key={item} className="breadcrumbs__item">
            <Link to={`/${pathNameCollection.slice(0, i + 1).join('/')}`} className="breadcrumbs__link">{item.slice(0, 1).toUpperCase() + item.slice(1)}</Link>
          </li>
        ) : (
            <li key={item} className="breadcrumbs__item">
              <NavLink to={`${item}`} activeClassName="breadcrumbs__link--active" className="breadcrumbs__link">
                {product ? product.brandName.slice(0, 1).toUpperCase() + product.brandName.slice(1) : item.slice(0, 1).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          )))}
      </ul>
    </section>
  );
}
