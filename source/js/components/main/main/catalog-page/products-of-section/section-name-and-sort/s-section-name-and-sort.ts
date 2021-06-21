import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../../../../styles/variables';

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Container;
