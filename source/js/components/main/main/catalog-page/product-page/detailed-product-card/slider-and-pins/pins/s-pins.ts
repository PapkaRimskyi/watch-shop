import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../../../../../../styles/variables';

export const List = styled.ul`
  display: none;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    display: grid;
    grid-template-columns: 127px 127px;
    grid-gap: 18px;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: repeat(4, 127px);
  }
`;

export const Li = styled.li`
  width: 127px;
`;

export const Link = styled.a`
  display: inline-block;
  line-height: 0;
`;

export const Img = styled.img`
  width: 100%;
`;
