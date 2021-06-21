import React, { FC, useEffect } from 'react';

import setPageTitle from '../../../../../utils/set-page-title/set-page-title';

import { Section, Headline, List, Li, CatalogHeadline, CatalogInformationContainer, LinkToSection } from './s-catalog-sections';

import data from './data/data';

import '../../../../../../img/decorative-photo/men-watch-decorative.jpg';
import '../../../../../../img/decorative-photo/men-watch-decorative-2.jpg';
import '../../../../../../img/decorative-photo/women-watch-decorative.jpg';
import '../../../../../../img/decorative-photo/women-watch-decorative-2.jpg';
import '../../../../../../img/decorative-photo/accessories-decorative.jpg';
import '../../../../../../img/decorative-photo/accessories-decorative-2.jpg';

const CatalogSections: FC = () => {
  // Меняю title у страницы при монтировании

  useEffect(() => {
    setPageTitle('Наш каталог');
  }, []);

  //

  return (
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
};

export default CatalogSections;
