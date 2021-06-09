import styled, { css } from 'styled-components';

import { MEDIA_SIZES } from '../../../../../../styles/variables';

export const Section = styled.section``;

export const TopSectionContainer = css`
  justify-content: space-between;
`;

export const topSectionStyles = {
  topSectionContainer: TopSectionContainer,
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    width: 90%;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
