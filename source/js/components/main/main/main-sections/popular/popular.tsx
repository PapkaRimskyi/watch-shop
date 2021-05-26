import React, { FC } from 'react';

import { Section, PopularHeadline, WatchMoreLink, List, ListItem, ProductName, ProductPrice, ProductImgContainer, Link } from './s-popular';

import data from './data/data';

import '../../../../../../img/watch-example/popular_watch_1.png';
import '../../../../../../img/watch-example/popular_watch_2.png';
import '../../../../../../img/watch-example/popular_watch_3.png';
import '../../../../../../img/watch-example/popular_watch_4.png';

import '../../../../../../img/decorative-elements/ellipse2.png';
import '../../../../../../img/decorative-elements/ellipse3.png';

const Popular: FC = () => (
  <Section>
    <PopularHeadline>Популярные модели</PopularHeadline>
    <WatchMoreLink href="/catalog">Смотреть все</WatchMoreLink>
    <List>
      {data.map((product) => (
        <ListItem key={product.id}>
          <ProductName>{product.productName.toUpperCase()}</ProductName>
          <ProductPrice>{product.productPrice}</ProductPrice>
          <ProductImgContainer>
            <img src={`${product.imgSrc}`} alt={`${product.placeholderText}`} />
          </ProductImgContainer>
          <Link href=" ">Подробнее</Link>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Popular;
