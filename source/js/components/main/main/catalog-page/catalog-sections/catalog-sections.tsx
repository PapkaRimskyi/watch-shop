import React, { FC } from 'react';

import { Section, Headline, List, Li, CatalogHeadline, CatalogInformationContainer, LinkToSection } from './s-catalog-sections';

import '../../../../../../img/decorative-photo/men-watch-decorative.jpg';
import '../../../../../../img/decorative-photo/men-watch-decorative-2.jpg';
import '../../../../../../img/decorative-photo/women-watch-decorative.jpg';
import '../../../../../../img/decorative-photo/women-watch-decorative-2.jpg';
import '../../../../../../img/decorative-photo/accessories-decorative.jpg';
import '../../../../../../img/decorative-photo/accessories-decorative-2.jpg';

import data from './data/data';

const CatalogSections: FC = () => (
  <Section>
    <Headline>Разделы в магазине</Headline>
    <List>
      {data.map((section) => (
        <Li key={section.catalogName} backgroundImagePaths={section.backgroundImagePaths}>
          <CatalogHeadline>{section.catalogName}</CatalogHeadline>
          <CatalogInformationContainer>
            <p>{section.description}</p>
            <LinkToSection to={`/catalog/${section.linkToSection}`} title={section.title}>Перейти</LinkToSection>
          </CatalogInformationContainer>
        </Li>
      ))}
    </List>
  </Section>
);

export default CatalogSections;
