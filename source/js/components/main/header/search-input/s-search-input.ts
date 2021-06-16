import { Ref } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { BLACK_COLOR, WHITE_COLOR } from '../../../../styles/variables';

const inputAppearAnimation = keyframes`
  from {
    opacity: 0;
    right: 0;
  }
  to {
    opacity: 1;
    right: 110%;
  }
`;

const animationRule = css`
  animation: ${inputAppearAnimation} .5s ease-in forwards;
`;

const InputField = styled.input<{ status: boolean, ref: Ref<HTMLInputElement> }>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  width: 100px;
  font: inherit;
  color: inherit;
  background-color: ${WHITE_COLOR};
  border-bottom: 1px solid ${BLACK_COLOR};
  ${((props) => (props.status ? animationRule : null))};
  z-index: 100;
`;

export default InputField;
