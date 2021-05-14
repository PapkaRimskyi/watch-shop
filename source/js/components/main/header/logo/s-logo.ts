import styled from 'styled-components';

import { MEDIA_SIZES } from '../../../../styles/variables';

const LogoLink = styled.a`
  display: none;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    display: inline;
    line-height: 0;
  }
`;

export default LogoLink;
