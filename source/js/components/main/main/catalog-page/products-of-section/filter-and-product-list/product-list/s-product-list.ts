import styled from 'styled-components';

import { MEDIA_SIZES } from '../../../../../../../styles/variables';

export const Section = styled.section`
  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    width: 60%;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    width: 70%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
