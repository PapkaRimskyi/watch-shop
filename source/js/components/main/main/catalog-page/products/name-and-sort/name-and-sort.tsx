import React, { FC } from 'react';

import Name from './name/name';
import Sort from './sort/sort';

import Container from './s-name-and-sort';

const NameAndSort: FC = () => (
  <Container>
    <Name />
    <Sort />
  </Container>
);

export default NameAndSort;
