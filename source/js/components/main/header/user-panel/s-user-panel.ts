import styled from 'styled-components';

import { BASKET_LINK_ACTIVE, FAVORITE_LINK_ACTIVE, SEARCH_BUTTON_ACTIVE, transitionTemplate } from '../../../../styles/variables';

export const Container = styled.div`
  position: relative;
`;

export const SearchButton = styled.button`
  &:hover svg path,
  &:focus-visible svg path {
    fill: ${SEARCH_BUTTON_ACTIVE};
  }
`;

export const LinkToSpecialSection = styled.a`
  display: inline-block;

  &#favorite-link {
    &:hover svg path,
    &:focus-visible svg path {
      stroke: ${FAVORITE_LINK_ACTIVE};
    }
  }

  &#basket-link {
    &:hover svg path,
    &:focus-visible svg path {
      fill: ${BASKET_LINK_ACTIVE};
    }
  }
`;

export const PanelList = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    margin: 0 10px;
    line-height: 0;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    & #search-button,
    & #favorite-link,
    & #basket-link {
      & svg path {
        transition: ${transitionTemplate(['stroke', 'fill', 'opacity'])};
      }

      &:active svg path {
        opacity: .6;
      }
    }
  }
`;
