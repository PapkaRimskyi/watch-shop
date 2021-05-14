import styled from 'styled-components';

import { MEDIA_SIZES } from '../../../../styles/variables';

export const Navigation = styled.nav`
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
    padding: 0;
    width: auto;
    display: block;
    background-color: transparent;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    max-width: 360px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  margin: 0 15px;
  margin-bottom: 15px;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    margin-bottom: 0;
  }
`;
