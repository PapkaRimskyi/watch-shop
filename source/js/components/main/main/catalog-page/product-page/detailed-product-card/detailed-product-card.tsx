import React, { FC } from 'react';

import ImgSlider from '../../../../../other/blocks/slider/slider';
import SliderAndPins from './slider-and-pins/slider-and-pins';
import ProductInformation from './information/information';

import VisuallyHidden from '../../../../../../styles/styled/visually-hidden/visually-hidden';

import Section from './s-detailed-product-card';

import IDetailedProductCardData from '../data/interface';

const DetailedProductCard: FC<{ data: IDetailedProductCardData }> = ({ data }) => (
  <Section>
    <VisuallyHidden>Страница товара с подробной информацией</VisuallyHidden>
    <ImgSlider data={data.imgForSlider} SliderComponent={SliderAndPins} />
    <ProductInformation productName={data.productName} productPrice={data.productPrice} description={data.description} techProperty={data.techProperty} />
  </Section>
);

export default DetailedProductCard;
