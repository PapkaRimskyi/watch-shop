import React, { FC, useEffect } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import SectionNameAndSort from './section-name-and-sort/section-name-and-sort';
import FilterAndProductList from './filter-and-product-list/filter-and-product-list';
import Discount from './discount/discount';
import AdditionalProducts from './additional-products/additional-products';

import setPageTitle from '../../../../../utils/set-page-title/set-page-title';

import appRoute from '../../../../../app-route/app-route';

const ProductsOfSection: FC<{ location: Location }> = ({ location }) => {
  // Устанавливаю title в зависимости от раздела

  useEffect(() => {
    const catalogWord = location.pathname.match('/catalog');
    if (catalogWord) {
      const currentCatalog = location.pathname.slice(catalogWord[0].length);
      const title = appRoute.find((info) => currentCatalog.includes(`/${info.route}`))?.localization;
      setPageTitle(title);
    }
  }, [location]);

  //

  return (
    <>
      <Breadcrumbs />
      <SectionNameAndSort />
      <FilterAndProductList />
      <Discount />
      <AdditionalProducts />
    </>
  );
};

export default ProductsOfSection;
