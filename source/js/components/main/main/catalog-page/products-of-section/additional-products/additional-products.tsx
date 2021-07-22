import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import TopSection from '../../../../../other/blocks/top-of-section/top-of-section';
import ProductsSlider from '../../../../../other/blocks/slider/slider';
import AdditionalSlider from './additional-slider/additional-slider';

import { topSectionStyles, Section } from './s-additional-products';

import data from './data/data';

const AdditionalProducts: FC = () => (
  <Section>
    <ThemeProvider theme={topSectionStyles}>
      <TopSection href="/accessories" sectionName="Ремешки" />
    </ThemeProvider>
    <ProductsSlider data={data} SliderComponent={AdditionalSlider} />
  </Section>
);

export default AdditionalProducts;
