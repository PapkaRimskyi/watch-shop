import React, { FC } from 'react';

import Breadcrumbs from '../../../../other/blocks/breadcrumbs/breadcrumbs';
import NameAndSort from './name-and-sort/name-and-sort';

import Section from './s-products';

const Product: FC<{ location: Location }> = ({ location }) => (
  <Section>
    <Breadcrumbs loc={location} />
    <NameAndSort />
    <div>another content</div>
  </Section>
);

export default Product;
