import React, { FC } from 'react';

import ProductCard from '../../../../../../other/blocks/product-card/product-card';

import VisuallyHidden from '../../../../../../../styles/styled/visually-hidden/visually-hidden';

import { Section, List } from './s-product-list';

import IProductList from './interface';

const ProductList: FC<IProductList> = ({ renderData }) => (
  <Section>
    <VisuallyHidden>Секция с товаром</VisuallyHidden>
    <List>
      {renderData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  </Section>
);

export default ProductList;
