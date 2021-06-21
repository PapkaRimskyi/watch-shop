import styled from 'styled-components';

import HeadlineStyles from '../../../../../../../styles/mixins/headline/headline';

import { MEDIA_SIZES } from '../../../../../../../styles/variables';

const Name = styled.h1`
  margin-bottom: 25px;
  ${HeadlineStyles};
  align-self: center;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    margin-bottom: 0;
    align-self: unset;
  }
`;

export default Name;
