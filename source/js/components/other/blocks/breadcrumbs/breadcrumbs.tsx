import React, { FC } from 'react';

import VisuallyHidden from '../../../../styles/visually-hidden';

import { Section, List, Li, LinkTo } from './s-breadcrumbs';

import '../../../../../img/unique-icon/arrow.svg';

const Breadcrumbs: FC<{ loc: Location }> = ({ loc }) => {
  const test = loc.pathname.split('/').filter((link) => link);
  return (
    <Section>
      <VisuallyHidden>Навигационная цепочка</VisuallyHidden>
      <List>
        <Li>
          <LinkTo exact to="/">Главная</LinkTo>
        </Li>
        {test.map((link, index) => (
          <Li>
            <LinkTo exact to={`/${test.slice(0, index + 1).join('/')}`}>{link}</LinkTo>
          </Li>
        ))}
      </List>
    </Section>
  );
};

export default Breadcrumbs;
