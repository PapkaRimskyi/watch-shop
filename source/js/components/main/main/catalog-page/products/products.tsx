import React, { FC, useEffect } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import NameAndSort from './name-and-sort/name-and-sort';
import FilterAndProductList from './filter-and-product-list/filter-and-product-list';
import Discount from './discount/discount';
import AdditionalProducts from './additional-products/additional-products';

import setPageTitle from '../../../../../utils/set-page-title/set-page-title';

import appRoute from '../../../../../app-route/app-route';

const Products: FC<{ location: Location }> = ({ location }) => {
  useEffect(() => {
    const catalogWord = location.pathname.match('/catalog');
    if (catalogWord) {
      const currentCatalog = location.pathname.slice(catalogWord[0].length);
      const title = appRoute.find((info) => currentCatalog.includes(`/${info.route}`))?.localization;
      setPageTitle(title);
    }
  }, [location]);

  return (
    <section>
      <Breadcrumbs />
      <NameAndSort />
      <FilterAndProductList />
      <Discount />
      <AdditionalProducts />
    </section>
  );
};

export default Products;
