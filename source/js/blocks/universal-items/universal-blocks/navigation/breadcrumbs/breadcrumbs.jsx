import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import '../../../../../../img/unique-icon/arrow.svg';

import breadcrumbsSectionNames from './model/breadcrumbs-section-names';

// Пришлоись внести проверку для product из location, так как я не придумал другого способа рендерить карточку товара динамически.

export default function Breadcrumbs() {
  const { pathname, product } = useLocation();
  const pathNameCollection = pathname.split('/').filter((item) => item);

  // Функция, которая возвращает, в зависимости от названия пути, русскоязычную версию.

  function findRuLocalization(item, sectionNames) {
    const foundMatch = sectionNames.find((section) => section.engName === item);
    return foundMatch.ruName.slice(0, 1).toUpperCase() + foundMatch.ruName.slice(1);
  }

  //

  return (
    <section className="breadcrumbs">
      <h2 className="visually-hidden">Навигационная цепочка</h2>
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Главная</Link>
        </li>
        {pathNameCollection.map((item, i) => (i !== pathNameCollection.length - 1 ? (
          <li key={item} className="breadcrumbs__item">
            <Link to={`/${pathNameCollection.slice(0, i + 1).join('/')}`} className="breadcrumbs__link">{findRuLocalization(item, breadcrumbsSectionNames)}</Link>
          </li>
        ) : (
            <li key={item} className="breadcrumbs__item">
              <NavLink to={`${item}`} activeClassName="breadcrumbs__link--active" className="breadcrumbs__link">
                {product ? product.brandName.slice(0, 1).toUpperCase() + product.brandName.slice(1) : findRuLocalization(item, breadcrumbsSectionNames)}
              </NavLink>
            </li>
          )))}
      </ul>
    </section>
  );
}
