import styled from 'styled-components';

import { transitionTemplate } from '../../../../styles/variables';

const Button = styled.button<{ side: 'left' | 'right' }>`
  transition: ${transitionTemplate(['opacity'])};
  width: ${((props) => props.theme.width)};
  height: ${((props) => props.theme.height)};

  &:hover,
  &:focus-visible {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }

  & svg {
    width: inherit;
    height: inherit;
    transform: ${((props) => (props.side === 'right' ? 'rotate(180deg)' : null))}
  }
`;

export default Button;
