import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTag from './s-main';

import Collection from './main-sections/collection/collection';
import Popular from './main-sections/popular/popular';
import Advantages from './main-sections/advantages/advantages';
import Subscription from './main-sections/subscription/subscription';

import Catalog from './catalog-sections/catalog';

const Main: FC = () => (
  <MainTag>
    <Switch>
      <Route exact path="/">
        <Collection />
        <Popular />
        <Advantages />
        <Subscription />
      </Route>
      <Route exact path="/catalog">
        <Catalog />
      </Route>
    </Switch>
  </MainTag>
);

export default Main;
