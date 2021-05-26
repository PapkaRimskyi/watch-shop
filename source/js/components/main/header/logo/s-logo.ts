import styled from 'styled-components';

import { MEDIA_SIZES, transitionTemplate } from '../../../../styles/variables';

const LogoLink = styled.a`
  display: none;
  transition: ${transitionTemplate(['opacity'])};

  &:hover {
    opacity: .6;
  }

  &:active,
  &:focus-visible {
    opacity: .3;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    display: inline;
    line-height: 0;
  }
`;

export default LogoLink;
