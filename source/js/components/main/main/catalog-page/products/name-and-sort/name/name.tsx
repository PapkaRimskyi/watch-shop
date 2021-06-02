import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import NameHeadline from './s-name';

import appRoute from '../../../../../../../app-route/app-route';

const Name: FC = () => {
  const { pathname } = useLocation();

  // Определяю название раздела по роуту

  const getSectionName = (routeList: typeof appRoute, currentUrl: string): string => {
    const currentUrlToArray = currentUrl.split('/').filter((text) => text);
    const filteredAppRouteListByType = routeList.filter((path) => path.type === 'Catalog subroute');
    const findCurrentRouteObject = filteredAppRouteListByType.find((catalogSection) => catalogSection.route === currentUrlToArray[currentUrlToArray.length - 1]);
    return findCurrentRouteObject?.localization || 'Раздел не определён';
  };

  //

  return (
    <NameHeadline>{getSectionName(appRoute, pathname)}</NameHeadline>
  );
};

export default Name;
