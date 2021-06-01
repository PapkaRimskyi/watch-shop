import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import NameHeadline from './s-name';

import appRoute from '../../../../../../../app-route/app-route';

const Name: FC = () => {
  const { pathname } = useLocation();

  // Определяю название раздела по роуту

  const getSectionName = (routeList: typeof appRoute, currentUrl: string): string => {
    const filteredRouteListByType = routeList.filter((path) => path.type === 'Catalog subroute');
    const findCurrentRouteObject = filteredRouteListByType.find((catalogSection) => currentUrl.includes(catalogSection.route));
    return findCurrentRouteObject?.localization || 'Раздел не определён';
  };

  //

  return (
    <NameHeadline>{getSectionName(appRoute, pathname)}</NameHeadline>
  );
};

export default Name;
