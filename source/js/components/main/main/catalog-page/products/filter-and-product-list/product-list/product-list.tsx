import React, { FC } from 'react';

import ProductItem from '../../../../../../other/blocks/product-item/product-item';

import VisuallyHidden from '../../../../../../../styles/mixins/visually-hidden/visually-hidden';

import { Section, List } from './s-product-list';

import data from '../../../data/data';

const ProductList: FC<{ renderData: typeof data }> = ({ renderData }) => (
  <Section>
    <VisuallyHidden>Секция с товаром</VisuallyHidden>
    <List>
      {renderData.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
  </Section>
);

export default ProductList;
