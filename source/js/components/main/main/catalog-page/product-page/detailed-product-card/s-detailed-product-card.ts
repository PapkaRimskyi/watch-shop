import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../../../../styles/variables';

const Section = styled.section`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Section;
