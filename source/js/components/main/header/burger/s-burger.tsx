import styled from 'styled-components';

import { MEDIA_SIZES } from '../../../../styles/variables';

const Button = styled.button`
  display: inline-block;
  vertical-align: middle;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    display: none;
  }
`;

export default Button;
