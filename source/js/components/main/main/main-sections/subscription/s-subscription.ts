import styled from 'styled-components';

import HeadlineStyles from '../../../../../styles/common/headline/s-headline';

import { MEDIA_SIZES } from '../../../../../styles/variables';

export const Section = styled.section`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    justify-content: space-around;
    align-items: center;
  }
`;

export const InformationContainer = styled.div`
  max-width: 400px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    max-width: 35%;
  }
`;

export const SectionHeadline = styled.h2`
  margin-bottom: 40px;
  ${HeadlineStyles};
`;

export const SocialAndNewsText = styled.p`
  margin-bottom: 50px;
  color: #444240;
`;

export const List = styled.ul`
  display: none;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    max-width: 55%;
    display: grid;
    grid-template-columns: minmax(40%, 242px) minmax(58%, 377px);
    grid-gap: 5px;
  }
`;

export const Li = styled.li`
  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    line-height: 0;

    & img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:first-child {
      grid-column: 1;
    }

    &:nth-child(2) {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    &:last-child {
      grid-column: 2/3;
      grid-row: 1/3;
    }
  }
`;
