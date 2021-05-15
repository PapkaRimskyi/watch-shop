import React, { FC } from 'react';

import VisuallyHidden from '../../../../styles/visually-hidden';

import { Section, List } from './s-social-links';

import socialIcons from '../../../svg/social-icons/social-icons';
import data from './data/data';

const SocialLinks: FC = () => (
  <Section>
    <VisuallyHidden>Ссылки на наши социальные сети</VisuallyHidden>
    <List>
      {data.map((social) => (
        <li key={social.socialName}>
          <a href={`https://${social.socialLink}`} title={`Ссылка на наш ${social.socialName}`} target="_blank" rel="noreferrer">
            {socialIcons(social.socialName)}
          </a>
        </li>
      ))}
    </List>
  </Section>
);

export default SocialLinks;
