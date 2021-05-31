import React, { FC } from 'react';

import Collection from './collection/collection';
import Popular from './popular/popular';
import Advantages from './advantages/advantages';
import Subscription from './subscription/subscription';

const MainPage: FC = () => (
  <>
    <Collection />
    <Popular />
    <Advantages />
    <Subscription />
  </>
);

export default MainPage;
