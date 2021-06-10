import React, { FC } from 'react';

import UserButton from '../../buttons/user-button/user-button';

import { Li, InformationSection, ProductInfoContainer, ProductName, ProductPrice, ButtonList, Figure, Img } from './s-product-item';

const ProductItem: FC<{ product: { id: string, brandname: string, price: string, imgPath: string } }> = ({ product }) => (
  <Li>
    <InformationSection>
      <ProductInfoContainer>
        <ProductName href="_">{product.brandname}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfoContainer>
      <ButtonList>
        <li>
          <UserButton elemClass="favorite" title="Добавить в избранное" />
        </li>
        <li>
          <UserButton elemClass="basket" title="Добавить в корзину" />
        </li>
      </ButtonList>
    </InformationSection>
    <Figure>
      <Img src={product.imgPath} alt="Изображение товара" />
    </Figure>
  </Li>
);

export default ProductItem;
