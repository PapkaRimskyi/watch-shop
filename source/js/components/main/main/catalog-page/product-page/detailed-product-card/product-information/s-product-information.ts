import styled, { keyframes } from 'styled-components';

import { Button as DefaultButton, DefaultButtonInteractiveStyles } from '../../../../../../../styles/styled/button/button';

import { WHITE_COLOR, BLACK_COLOR, transitionTemplate } from '../../../../../../../styles/variables';

const underlineIN = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`;

const underlineOUT = keyframes`
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
`;

export const ProductInformationContainer = styled.div`
  margin-bottom: 45px;
  margin-left: auto;
  padding: 35px;
  width: 45%;
  background-color: #FDFDFB;
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
  justify-content: space-between;
  width: 70%;
`;

export const SwitchInformationButton = styled.button<{ className?: string }>`
  position: relative;
  margin-bottom: 10px;
  font-weight: 700;
  color: #444240;
  transition: ${transitionTemplate(['opacity'])};
  overflow-x: clip;

  &::before {
    position: absolute;
    content: "";
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #C4C0B6;
    animation: ${underlineOUT} .5s ease-out forwards;
  }

  &:hover,
  &:focus-visible {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }

  &.active::before {
    animation: ${underlineIN} .5s ease-in forwards;
  }
`;

export const InformationContainer = styled.div`
  margin-bottom: 54px;
  white-space: pre-line;
`;

export const AddToBasket = styled(DefaultButton)`
  width: 185px;
  color: ${WHITE_COLOR};
  background-color: ${BLACK_COLOR};
  ${DefaultButtonInteractiveStyles};
`;
