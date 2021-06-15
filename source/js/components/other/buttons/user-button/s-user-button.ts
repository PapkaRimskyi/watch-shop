import styled from 'styled-components';

import { FAVORITE_LINK_ACTIVE, BASKET_LINK_ACTIVE, transitionTemplate, SEARCH_BUTTON_ACTIVE } from '../../../../styles/variables';

const InteractiveElement = styled.a<{ type: 'button' | undefined, href: string | undefined }>`
  display: inline-block;

  &.search {
    &:hover svg path,
    &:focus-visible svg path {
      fill: ${SEARCH_BUTTON_ACTIVE};
    }
  }

  &.favorite {
    &:hover svg path,
    &:focus-visible svg path {
      stroke: ${FAVORITE_LINK_ACTIVE};
    }
  }

  &.basket {
    &:hover svg path,
    &:focus-visible svg path {
      fill: ${BASKET_LINK_ACTIVE};
    }
  }

  &.search,
  &.favorite,
  &.basket {
    & svg path {
      transition: ${transitionTemplate(['stroke', 'fill', 'opacity'])};
    }

    &:active svg path {
      opacity: .6;
    }
  }
`;

export default InteractiveElement;
