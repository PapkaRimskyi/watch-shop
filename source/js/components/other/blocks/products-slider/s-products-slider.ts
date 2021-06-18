import styled from 'styled-components';

import Button from '../../buttons/arrow-button/arrow-button';

import { MEDIA_SIZES } from '../../../../styles/variables';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    justify-content: space-around;
  }
`;

export const List = styled.ul`
  position: relative;
  width: 90%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 100%;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 0;
  }

  & > li {
    scroll-snap-align: start;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 45% 45%;
    grid-auto-columns: 45%;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: minmax(365px, 365px);
    grid-auto-columns: 365px;
    scroll-snap-type: unset;

    & > li {
      scroll-snap-align: unset;
    }
  }
`;

export const ArrowButton = styled(Button)`
  display: none;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    display: inline-block;

    &:disabled {
      cursor: not-allowed;
      opacity: 0;
      visibility: hidden;
    }
  }
`;
