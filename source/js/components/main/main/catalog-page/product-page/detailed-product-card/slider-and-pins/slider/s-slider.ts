import styled from 'styled-components';

import { Wrapper as DefaultWrapper, List as DefaultList } from '../../../../../../../other/blocks/slider/s-slider';

import { MEDIA_SIZES } from '../../../../../../../../styles/variables';

export const Wrapper = styled(DefaultWrapper)`
  justify-content: space-between;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-right: 30px;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    width: 100%;
  }
`;

export const List = styled(DefaultList)`
  margin: 0 10px 15px;
  max-width: 350px;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    max-width: 423px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
