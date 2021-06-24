import React, { FC } from 'react';

import SliderAndPins from './slider-and-pins/slider-and-pins';
import ProductInformation from './information/information';

import VisuallyHidden from '../../../../../../styles/styled/visually-hidden/visually-hidden';

import Section from './s-detailed-product-card';

import Idata from '../data/interface';

const DetailedProductCard: FC<{ data: Idata }> = ({ data }) => (
  <Section>
    <VisuallyHidden>Страница товара с подробной информацией</VisuallyHidden>
    <SliderAndPins data={data.imgForSlider} />
    <ProductInformation productName={data.productName} productPrice={data.productPrice} description={data.description} techProperty={data.techProperty} />
  </Section>
);

export default DetailedProductCard;
