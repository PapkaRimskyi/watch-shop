import React, { FC } from 'react';

import SocialLinks from '../../../../other/blocks/social-links/social-links';

import {
  Section,
  MainHeadline,
  DescriptionContainer,
  CollectionHeadline,
  Type,
  Description,
  CatalogLink,
  ExampleWatchContainer,
  ExampleImg,
  ModifiedSocialLinksSection,
  ModifiedSocialLinksList,
  ModifiedSocialLinksToSocial,
} from './s-collection';

import '../../../../../../img/watch-example/watch_example.png';
import '../../../../../../img/decorative-elements/ellipse.png';

const Collection: FC = () => (
  <Section>
    <MainHeadline>Магазин часов</MainHeadline>
    <SocialLinks modifiedComponents={{ Section: ModifiedSocialLinksSection, List: ModifiedSocialLinksList, LinkToSocial: ModifiedSocialLinksToSocial }} />
    <DescriptionContainer>
      <CollectionHeadline>Весна/Лето 2019</CollectionHeadline>
      <Type>Коллекция</Type>
      <Description>Швейцарские часы в наличии в Москве и с доставкой по всему миру</Description>
      <CatalogLink href="/catalog" as="a">Смотреть каталог</CatalogLink>
    </DescriptionContainer>
    <ExampleWatchContainer>
      <p>22 000 &#8381;</p>
      <ExampleImg src="/assets/img/watch_example.png" alt="Пример часов из коллекции" />
      <p>28 мм диаметр</p>
    </ExampleWatchContainer>
  </Section>
);

export default Collection;
