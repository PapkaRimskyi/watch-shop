import styled from 'styled-components';

import { MEDIA_SIZES, transitionTemplate, WHITE_COLOR } from '../../../../styles/variables';

export const Section = styled.section`
  padding: 50px 0 69px;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    padding-right: 100px;
    padding-left: 100px;
  }
`;

export const MainList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const HeadlineSubList = styled.h3`
  margin-top: 8px;
  font-weight: 400;
  color: ${WHITE_COLOR};
`;

export const MainListItem = styled.li`
  margin: 0 10px;

  & img,
  & ${HeadlineSubList} {
    margin-bottom: 20px;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {

    &:not(:last-of-type) {
      margin-bottom: 0;
    }

    &:not(:nth-last-of-type(-n+2)) {
      margin-bottom: 20px;
    }
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {

    &:not(:nth-last-of-type(-n+2)) {
      margin-bottom: 0;
    }
  }
`;

export const SubListItem = styled.li`
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, .7);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & a {
    transition: ${transitionTemplate(['color', 'opacity'])};

    &:hover,
    &:focus-visible {
      color: ${WHITE_COLOR};
    }

    &:active {
      opacity: .3;
    }
  }
`;
