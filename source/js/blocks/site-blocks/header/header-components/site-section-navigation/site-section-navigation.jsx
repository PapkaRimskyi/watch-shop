/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, NavLink, useLocation } from 'react-router-dom';

import siteSectionNavModel from './model/site-section-nav-model';

export default function SiteSectionNav({ popupStatus, popupButtonHandler }) {
  const { pathname } = useLocation();

  // Делегирование. Обработчик вешается на ul.

  function popupLinkHandler(e) {
    if (e.target.tagName === 'A') {
      popupButtonHandler(e);
    }
  }

  //

  return (
    <nav className={`site-section-navigation${classNames(pathname !== '/' ? ' site-section-navigation--other-page' : null, ` site-section-navigation--${popupStatus ? 'visible' : 'hidden'}`)}`} aria-label="Навигация по сайту">
      <ul className="site-section-navigation__list" onClick={popupLinkHandler}>
        {siteSectionNavModel.map(({ sectionName, path }) => (
          <li className="site-section-navigation__item" key={sectionName}>
            {pathname === path
              ? (
                <NavLink to={path} activeClassName="site-section-navigation__link--active" className="site-section-navigation__link" aria-label={`Ссылка в раздел ${sectionName}`}>{sectionName}</NavLink>
              ) : (
                <Link to={path} className="site-section-navigation__link" aria-label={`Ссылка в раздел ${sectionName}`}>{sectionName}</Link>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

SiteSectionNav.propTypes = {
  popupButtonHandler: PropTypes.func.isRequired,
  popupStatus: PropTypes.bool.isRequired,
};
