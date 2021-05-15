import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../../styles/variables';

export const Section = styled.section`
  position: absolute;
  top: 45%;
  left: 5px;
  transform: translateY(-50%);
`;

export const List = styled.ul`
  display: none;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & li {
      margin-bottom: 10px;
    }
  }
`;
