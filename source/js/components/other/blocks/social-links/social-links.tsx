/* eslint-disable no-shadow */
import React, { FC } from 'react';
import { StyledComponent } from 'styled-components';

import VisuallyHidden from '../../../../styles/visually-hidden';

import { Section, List, LinkToSocial } from './s-social-links';

import socialIcons from '../../../svg/social-icons/social-icons';
import data from './data/data';

interface ISocialLinks {
  modifiedComponents?: {
    Section: StyledComponent<'section'>,
    List: StyledComponent<'ul'>,
    LinkToSocial: StyledComponent<'a'>,
  },
}

const SocialLinks: FC<ISocialLinks> = ({ modifiedComponents }) => {
  const { Section, List, LinkToSocial } = modifiedComponents;
  return (
    <Section>
      <VisuallyHidden>Ссылки на наши социальные сети</VisuallyHidden>
      <List>
        {data.map((social) => (
          <li key={social.socialName}>
            <LinkToSocial href={`https://${social.socialLink}`} title={`Ссылка на наш ${social.socialName}`} target="_blank" rel="noreferrer">
              {socialIcons(social.socialName)}
            </LinkToSocial>
          </li>
        ))}
      </List>
    </Section>
  );
};

SocialLinks.defaultProps = {
  modifiedComponents: {
    Section,
    List,
    LinkToSocial,
  },
};

export default SocialLinks;
