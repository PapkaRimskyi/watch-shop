import styled from 'styled-components';

import HeadlineStyles from '../../../../../../../styles/common/headline/s-headline';

import { MEDIA_SIZES } from '../../../../../../../styles/variables';

const NameHeadline = styled.h1`
  margin-bottom: 25px;
  ${HeadlineStyles};
  align-self: center;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    margin-bottom: 0;
    align-self: unset;
  }
`;

export default NameHeadline;
