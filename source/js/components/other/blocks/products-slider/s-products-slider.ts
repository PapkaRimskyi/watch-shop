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
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 0;
  }

  & > li {
    scroll-snap-align: start;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 30% 30% 30%;
    grid-auto-columns: 30%;
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
