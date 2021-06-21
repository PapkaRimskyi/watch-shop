import React, { FC } from 'react';

import Name from './section-name/section-name';
import Sort from './sort/sort';

import Container from './s-section-name-and-sort';

const NameAndSort: FC = () => (
  <Container>
    <Name />
    <Sort />
  </Container>
);

export default NameAndSort;
