import styled from 'styled-components';

import { Wrapper as DefaultWrapper, List as DefaultList } from '../../../../../../other/blocks/slider/s-slider';

import { MEDIA_SIZES } from '../../../../../../../styles/variables';

export const Wrapper = styled(DefaultWrapper)`
  justify-content: center;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    justify-content: space-around;
  }
`;

export const List = styled(DefaultList)`
  width: 90%;
  grid-gap: 40px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 45% 45%;
    grid-auto-columns: 45%;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: minmax(365px, 365px);
    grid-auto-columns: 365px;
  }
`;
