import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './products-of-section/products-of-section';
import CatalogSections from './catalog-sections/catalog-sections';
import ProductPage from './product-page/product-page';

const CatalogPage: FC = () => (
  <>
    <Switch>
      <Route path="/catalog/men-watch/test" component={ProductPage} />
      <Route path="/catalog/men-watch" component={Products} />
      <Route>
        <CatalogSections />
      </Route>
    </Switch>
  </>
);

export default CatalogPage;
