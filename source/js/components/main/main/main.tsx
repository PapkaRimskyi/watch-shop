import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTag from './s-main';

import Collection from './collection/collection';
import Popular from './popular/popular';
import Advantages from './advantages/advantages';
import Subscription from './subscription/subscription';

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
        <div>test</div>
      </Route>
    </Switch>
  </MainTag>
);

export default Main;
