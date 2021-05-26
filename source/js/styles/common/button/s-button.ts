import styled, { css } from 'styled-components';

import { MAIN_COLOR, transitionTemplate } from '../../variables';

export const Button = styled.button`
  padding: 25px 35px;
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const DefaultButtonInteractiveStyles = css`
  transition: ${transitionTemplate(['color', 'background-color', 'box-shadow'])};

  &:hover,
  &:focus-visible {
    color: ${MAIN_COLOR};
    background-color: #c7c7c7;
  }

  &:active {
    background-color: #c7c7c7;
    color: ${MAIN_COLOR};
    box-shadow: inset 1px 1px 10px #464444;
  }
`;
