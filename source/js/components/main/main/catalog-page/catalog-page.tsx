import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './products/products';
import CatalogSections from './catalog-sections/catalog-sections';

const Catalog: FC = () => (
  <>
    <Switch>
      <Route path="/catalog/men-watch" component={Products} />
      <Route>
        <CatalogSections />
      </Route>
    </Switch>
  </>
);

export default Catalog;
