import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Name from './s-section-name';

import appRoute from '../../../../../../../app-route/app-route';

const SectionName: FC = () => {
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
    <Name>{getSectionName(appRoute, pathname)}</Name>
  );
};

export default SectionName;
