import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTag from './s-main';

import MainPage from './main-page/main-page';
import Catalog from './catalog-page/catalog-page';

const Main: FC = () => (
  <MainTag>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
    </Switch>
  </MainTag>
);

export default Main;
