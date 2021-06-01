import styled from 'styled-components';

import DefaultHeadlineStyle from '../../../../../styles/common/headline/s-headline';
import LearnMoreLink from '../../../../../styles/common/learn-more-link/learn-more-link';

import { MEDIA_SIZES, transitionTemplate } from '../../../../../styles/variables';

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const Headline = styled.h1`
  margin-bottom: 45px;
  padding: 0 10px;
  ${DefaultHeadlineStyle};
  font-weight: 700;
  text-align: center;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 500px;
  justify-items: center;
  grid-gap: 10px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Li = styled.li<{ backgroundImagePaths: string[] }>`
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  background: #cccccc url(${((props) => `/assets/img/${props.backgroundImagePaths[0]}`)}) no-repeat center center;
  background-size: cover;
  border-top: 3px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  transition: ${transitionTemplate(['background-image'])};

  &:hover {
    background-image: url(${((props) => `/assets/img/${props.backgroundImagePaths[1]}`)});
  }
`;

export const CatalogHeadline = styled.h2`
  padding: 10px;
  text-align: center;
  background-color: rgba(245, 245, 245, .8);
`;

export const CatalogInformationContainer = styled.div`
  margin-top: auto;
  padding: 5px 10px;
  display: none;

  ${Li}:hover & {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
  }
`;

export const LinkToSection = styled(LearnMoreLink)`
  margin-left: auto;
  padding-left: 40px;
`;
