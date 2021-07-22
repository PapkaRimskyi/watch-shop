import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { topSectionStyles, Section, List, ListItem, ProductName, ProductPrice, ProductImgContainer, Link } from './s-popular';

import TopSection from '../../../../other/blocks/top-of-section/top-of-section';

import data from './data/data';

const Popular: FC = () => (
  <Section>
    <ThemeProvider theme={topSectionStyles}>
      <TopSection href="/catalog" sectionName="Популярные модели" />
    </ThemeProvider>
    <List>
      {data.map((product) => (
        <ListItem key={product.id}>
          <ProductName>{product.productName.toUpperCase()}</ProductName>
          <ProductPrice>{product.productPrice}</ProductPrice>
          <ProductImgContainer>
            <img src={`${product.imgSrc}`} alt={`${product.placeholderText}`} />
          </ProductImgContainer>
          <Link to=" ">Подробнее</Link>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Popular;
