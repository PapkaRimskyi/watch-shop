import React, { FC, useEffect } from 'react';

import setPageTitle from '../../../../../utils/set-page-title/set-page-title';

import { Section, Headline, List, Li, CatalogHeadline, CatalogInformationContainer, LinkToSection } from './s-catalog-sections';

import data from './data/data';

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
