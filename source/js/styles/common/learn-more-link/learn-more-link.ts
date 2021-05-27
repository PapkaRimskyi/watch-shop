import styled from 'styled-components';

import { transitionTemplate } from '../../variables';

const LearnMoreLink = styled.a`
  position: relative;
  transition: ${transitionTemplate(['scale, opacity'])};

  &:hover,
  &:focus-visible {
    transform: scale(.8);
  }

  &:active {
    opacity: .6;
  }

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 30px;
    transform: translateY(-50%);
    border: 1px solid #8B8371;
  }
`;

export default LearnMoreLink;
