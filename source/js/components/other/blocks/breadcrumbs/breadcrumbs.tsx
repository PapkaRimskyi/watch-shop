import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import VisuallyHidden from '../../../../styles/styled/visually-hidden/visually-hidden';
import { Section, List, Li, LinkTo } from './s-breadcrumbs';

import appRoute from '../../../../app-route/app-route';

import '../../../../../img/unique-icon/arrow.svg';

const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();

  // Разделяю pathname на массив по /

  const pathCollection = pathname.split('/').filter((link) => link);

  //

  // Получаю локализованное название для роута

  const getLocalizationString = (routeList: typeof appRoute, route: string): string => routeList.find((path) => path.route === route)?.localization || 'Route not found';

  //

  return (
    <Section>
      <VisuallyHidden>Навигационная цепочка</VisuallyHidden>
      <List>
        <Li>
          <LinkTo exact to="/">Главная</LinkTo>
        </Li>
        {pathCollection.map((link, index) => (
          <Li key={link}>
            <LinkTo exact to={`/${pathCollection.slice(0, index + 1).join('/')}`}>{getLocalizationString(appRoute, link)}</LinkTo>
          </Li>
        ))}
      </List>
    </Section>
  );
};

export default Breadcrumbs;
