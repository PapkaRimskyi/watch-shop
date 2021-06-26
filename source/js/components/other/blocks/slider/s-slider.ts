import styled from 'styled-components';

import { MEDIA_SIZES } from '../../../../styles/variables';

import Button from '../../buttons/arrow-button/arrow-button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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

export const List = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 0;
  }

  & > li {
    scroll-snap-align: start;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    scroll-snap-type: unset;

    & > li {
      scroll-snap-align: unset;
    }
  }
`;
