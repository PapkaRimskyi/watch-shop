import React, { FC } from 'react';

import MainTag from './s-main';

import Collection from './collection/collection';
import Popular from './popular/popular';

const Main: FC = () => (
  <MainTag>
    <Collection />
    <Popular />
  </MainTag>
);

export default Main;
