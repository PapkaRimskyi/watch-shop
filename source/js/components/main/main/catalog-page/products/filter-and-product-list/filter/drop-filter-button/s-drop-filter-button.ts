import styled from 'styled-components';

import { Button as DefaultButton } from '../../../../../../../../styles/common/button/s-button';
import { transitionTemplate } from '../../../../../../../../styles/variables';

const Button = styled(DefaultButton)`
  width: 100%;
  background-color: transparent;
  border: 2px solid #e7e0cf;
  transition: ${transitionTemplate(['background-color', 'opacity'])};

  &:hover,
  &:focus-visible {
    background-color: #e7e0cf;
  }

  &:active {
    opacity: .5;
  }
`;

export default Button;
