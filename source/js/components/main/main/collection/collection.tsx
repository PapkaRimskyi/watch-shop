import React, { FC } from 'react';

import { Section, MainHeadline, DescriptionContainer, CollectionHeadline, Type, Description, ExampleWatchContainer, ExampleImg } from './s-collection';
import Button from '../../../../styles/common/button/s-button';

import '../../../../../img/watch-example/watch_example.png';
import '../../../../../img/decorative-elements/ellipse.png';

const Collection: FC = () => (
  <Section>
    <MainHeadline>Магазин часов</MainHeadline>
    <DescriptionContainer>
      <CollectionHeadline>Весна/Лето 2019</CollectionHeadline>
      <Type>Коллекция</Type>
      <Description>Швейцарские часы в наличии в Москве и с доставкой по всему миру</Description>
      <Button type="button">Смотреть каталог</Button>
    </DescriptionContainer>
    <ExampleWatchContainer>
      <p>22 000 &#8381;</p>
      <ExampleImg src="assets/img/watch_example.png" alt="Пример часов из коллекции" />
      <p>28 мм диаметр</p>
    </ExampleWatchContainer>
  </Section>
);

export default Collection;
