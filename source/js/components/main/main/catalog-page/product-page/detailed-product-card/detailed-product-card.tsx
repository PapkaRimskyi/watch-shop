import React, { FC } from 'react';

import ProductInformation from './product-information/product-information';

import VisuallyHidden from '../../../../../../styles/styled/visually-hidden/visually-hidden';

import Section from './s-detailed-product-card';

const DetailedProductCard: FC = () => (
  <Section>
    <VisuallyHidden>Страница товара с подробной информацией</VisuallyHidden>
    <ProductInformation />
  </Section>
);

export default DetailedProductCard;
