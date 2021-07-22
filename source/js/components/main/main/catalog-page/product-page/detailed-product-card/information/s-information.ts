import styled, { keyframes } from 'styled-components';

import { Button as DefaultButton, DefaultButtonInteractiveStyles } from '../../../../../../../styles/styled/button/button';

import { WHITE_COLOR, BLACK_COLOR, transitionTemplate, MEDIA_SIZES } from '../../../../../../../styles/variables';

const underlineOUT = keyframes`
  from {
    left: 0;
  }
  to {
    left: 20%;
  }
`;

const underlineOpacityIN = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const underlineOpacityOUT = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ProductInformationContainer = styled.div`
  margin-bottom: 45px;
  padding: 35px;
  background-color: #FDFDFB;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    width: 50%;
  }
`;

export const TopOfBlock = styled.div`
  margin-bottom: 51px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductName = styled.h3`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-transform: uppercase;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #686868;
`;

export const SwitchInformationButtonsContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${MEDIA_SIZES.largeDesktop}px) {
    margin-bottom: 20px;
    width: 70%;
    justify-content: space-between;
  }
`;

export const SwitchInformationButton = styled.button<{ className?: string }>`
  margin-bottom: 10px;
  position: relative;
  font-weight: 700;
  color: #444240;
  transition: ${transitionTemplate(['opacity'])};

  &:first-of-type {
    margin-right: 15px;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #C4C0B6;
    animation-name: ${underlineOUT}, ${underlineOpacityOUT};
    animation-duration: .3s, .2s;
    animation-fill-mode: forwards;
  }

  &.active::before {
    animation: ${underlineOpacityIN} .3s ease-in normal forwards;
  }

  &:hover,
  &:focus-visible {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }

  @media (min-width: ${MEDIA_SIZES.largeDesktop}px) {
    margin-bottom: 0;
  }
`;

export const InformationContainer = styled.div`
  margin-bottom: 54px;
  white-space: pre-line;
`;

export const AddToBasket = styled(DefaultButton)<{ className: string }>`
  width: 185px;
  color: ${WHITE_COLOR};
  background-color: ${BLACK_COLOR};
  ${DefaultButtonInteractiveStyles};
`;
