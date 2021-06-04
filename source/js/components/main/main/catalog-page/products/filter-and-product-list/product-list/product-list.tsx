import React, { FC } from 'react';

import UserButton from '../../../../../../other/buttons/user-button/user-button';

import VisuallyHidden from '../../../../../../../styles/visually-hidden';

import { Section, List, Li, InformationSection, ProductName, ProductPrice, ButtonList, Figure, Img } from './s-product-list';

import data from '../../../data/data';

const ProductList: FC<{ renderData: typeof data }> = ({ renderData }) => (
  <Section>
    <VisuallyHidden>Секция с товаром</VisuallyHidden>
    <List>
      {renderData.map((product) => (
        <Li key={product.id}>
          <InformationSection>
            <div>
              <ProductName href="_">{product.brandname}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
            </div>
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
      ))}
    </List>
  </Section>
);

export default ProductList;
