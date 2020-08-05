/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

import siteSectionNavModel from '../../model/site-section-nav-model';

export default function SiteSectionNav({ popupListItemHandler }) {
  return (
    <nav className="site-section-navigation" aria-label="Навигация по сайту">
      <ul className="site-section-navigation__list" onClick={popupListItemHandler}>
        {siteSectionNavModel.map(({ sectionName, path }) => (
          <li className="site-section-navigation__item" key={sectionName}>
            <Link to={path} className="site-section-navigation__link" aria-label={`Ссылка в раздел ${sectionName}`}>{sectionName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
