import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../../../../../../styles/variables';

export const List = styled.ul`
  margin-bottom: 15px;
  max-width: 350px;
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

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-right: 30px;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    max-width: 423px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
