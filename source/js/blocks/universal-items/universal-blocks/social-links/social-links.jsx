import React from 'react';
import PropTypes from 'prop-types';

import socialLinksInfo from './model/social-links-data';

export default function SocialLinks({ majorClass }) {
  return (
    <nav className={`social-links ${majorClass}__social`} aria-label="Список наших социальных сетей">
      <ul className="social-links__list">
        {socialLinksInfo.map((link) => (
          <li className="social-links__item" key={link.linkType}>
            <a href={`https://${link.linkType}.com/`} className={`social-links__link social-links__link--${link.linkType}`} aria-label={`Ссылка на наш ${link.linkType}`} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

SocialLinks.propTypes = {
  majorClass: PropTypes.string.isRequired,
};
