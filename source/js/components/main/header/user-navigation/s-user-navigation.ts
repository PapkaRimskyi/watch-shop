import styled from 'styled-components';

import IUserNavigationProps from './interface';

import { MEDIA_SIZES, transitionTemplate, USER_NAVIGATION_ACTIVE_LINK_COLOR, USER_NAVIGATION_LINK_COLOR } from '../../../../styles/variables';

export const Navigation = styled.nav<IUserNavigationProps>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 15px;
  padding-top: 25px;
  width: 100%;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: #b5b5b5;
  z-index: 100;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    position: static;
    margin-right: auto;
    padding: 0;
    width: auto;
    display: block;
    background-color: transparent;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    max-width: 420px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Item = styled.li`
  margin: 0 20px;
  margin-bottom: 15px;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    margin-bottom: 0;
  }
`;

export const LinkToSections = styled.a`
  color: ${USER_NAVIGATION_LINK_COLOR};
  transition: ${transitionTemplate(['color, opacity'])};

  &:hover {
    color: ${USER_NAVIGATION_ACTIVE_LINK_COLOR};
  }

  &:active,
  &:focus-visible {
    opacity: .6;
  }
`;
