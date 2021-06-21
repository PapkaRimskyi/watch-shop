import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import TopSection from '../../../../../other/blocks/top-of-section/top-of-section';
import ProductsSlider from '../../../../../other/blocks/products-slider/products-slider';

import { topSectionStyles, Section } from './s-additional-products';

import data from './data/data';

import '../../../../../../../img/accessories/watch_strap_1.png';
import '../../../../../../../img/accessories/watch_strap_2.png';
import '../../../../../../../img/accessories/watch_strap_3.png';

const AdditionalProducts: FC = () => (
  <Section>
    <ThemeProvider theme={topSectionStyles}>
      <TopSection href="/accessories" sectionName="Ремешки" />
    </ThemeProvider>
    <ProductsSlider data={data} />
  </Section>
);

export default AdditionalProducts;
