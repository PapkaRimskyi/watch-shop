import React, { FC } from 'react';

import MainTag from './s-main';

import Collection from './collection/collection';
import Popular from './popular/popular';
import Advantages from './advantages/advantages';
import Subscription from './subscription/subscription';

const Main: FC = () => (
  <MainTag>
    <Collection />
    <Popular />
    <Advantages />
    <Subscription />
  </MainTag>
);

export default Main;
