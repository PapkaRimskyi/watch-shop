/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../../../img/logo/logo-color-reverse.svg';

import footerLinks from '../../model/footer-links';

export default function DetailedInformation() {
  return (
    <section className="detailed-information">
      <div className="detailed-information__container">
        {footerLinks.map((section, index) => (
          <ul className="detailed-information__list" key={`list-${index}`}>
            {section.map(({ type, href, text, logo: Logo }) => (
              <li className="detailed-information__item" key={text}>
                {type === 'logo'
                  ? <Logo className="detailed-information__logo" />
                  : type === 'link' ? <Link to={href} className="detailed-information__link">{text}</Link>
                    : <p className="detailed-information__list-headline">{text}</p>}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
