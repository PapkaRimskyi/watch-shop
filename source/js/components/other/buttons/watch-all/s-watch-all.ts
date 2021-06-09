import styled from 'styled-components';

import { transitionTemplate } from '../../../../styles/variables';

const Link = styled.a`
  padding-bottom: 5px;
  font-weight: 700;
  color: #444240;
  border-bottom: 1px solid #C4C0B6;
  transition: ${transitionTemplate(['opacity', 'border'])};

  &:hover,
  &:focus-visible {
    opacity: .6;
    border-bottom-color: transparent;
  }

  &:active {
    opacity: .3;
  }
`;

export default Link;
