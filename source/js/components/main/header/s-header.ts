import styled from 'styled-components';
import { MEDIA_SIZES } from '../../../styles/variables';

export const Header = styled.header`
  position: relative;
  padding: 25px 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerBlock = styled.div`
  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
`;
