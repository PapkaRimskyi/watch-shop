import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import ArrowButton from '../../../../../other/buttons/arrow-button/arrow-button';
import TopSection from '../../../../../other/blocks/top-of-section/top-of-section';
import ProductItem from '../../../../../other/blocks/product-item/product-item';

import { topSectionStyles, Wrapper, List } from './s-additional-products';

import data from './data/data';

import '../../../../../../../img/accessories/watch_strap_1.png';
import '../../../../../../../img/accessories/watch_strap_2.png';
import '../../../../../../../img/accessories/watch_strap_3.png';

const AdditionalProducts: FC = () => (
  <section>
    <ThemeProvider theme={topSectionStyles}>
      <TopSection href="/accessories" sectionName="Аксессуары" />
    </ThemeProvider>
    <Wrapper>
      <ThemeProvider theme={{ width: '12px', height: '23px' }}>
        <ArrowButton title="Предыдущий товар" side="left" onClick={() => console.log('test')} />
      </ThemeProvider>
      <List>
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </List>
      <ThemeProvider theme={{ width: '12px', height: '23px' }}>
        <ArrowButton title="Следующий товар" side="right" onClick={() => console.log('test')} />
      </ThemeProvider>
    </Wrapper>
  </section>
);

export default AdditionalProducts;
