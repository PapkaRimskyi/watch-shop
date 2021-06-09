import styled from 'styled-components';

import { transitionTemplate } from '../../../../styles/variables';

const Button = styled.button<{ side: 'left' | 'right' }>`
  transition: ${transitionTemplate(['opacity'])};
  width: ${((props) => props.theme?.width)};
  height: ${((props) => props.theme?.height)};

  &:hover,
  &:focus-visible {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }

  & svg {
    width: 100%;
    height: 100%;
    transform: ${((props) => (props.side === 'right' ? 'rotate(180deg)' : null))}
  }
`;

export default Button;
