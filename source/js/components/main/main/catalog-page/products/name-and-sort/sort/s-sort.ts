import styled from 'styled-components';

import { MAIN_COLOR, MEDIA_SIZES, WHITE_COLOR } from '../../../../../../../styles/variables';

export const Section = styled.section`
  position: relative;
  align-self: flex-end;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    align-self: unset;
  }
`;

export const Label = styled.label`
  position: relative;
  color: #BDB9B5;

  &,
  & > input {
    cursor: pointer;
  }

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 2.5%;
    width: 5px;
    height: 10px;
    transform: translateY(-50%) rotate(-90deg);
    background: url('/assets/img/arrow.svg') no-repeat center center;
  }
`;

export const SortInput = styled.input`
  padding-right: 18px;
  width: 130px;
  color: ${MAIN_COLOR};
`;

export const List = styled.ul`
  position: absolute;
  top: 100%;
  right: 9%;
  z-index: 101;
  background-color: ${WHITE_COLOR};
`;
