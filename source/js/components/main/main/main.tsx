import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main-page/main-page';
import CatalogPage from './catalog-page/catalog-page';

import MainTag from './s-main';

const Main: FC = () => (
  <MainTag>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/catalog">
        <CatalogPage />
      </Route>
    </Switch>
  </MainTag>
);

export default Main;
