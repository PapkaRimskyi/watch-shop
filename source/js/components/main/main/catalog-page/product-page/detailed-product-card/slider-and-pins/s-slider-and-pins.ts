import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../../../../../styles/variables';

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    flex-direction: row;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    padding: 0;
    align-items: center;
    flex-direction: column;
  }
`;

export default Container;
