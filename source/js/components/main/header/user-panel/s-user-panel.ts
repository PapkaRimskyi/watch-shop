import styled from 'styled-components';

import { WHITE_COLOR } from '../../../../styles/variables';

export const Container = styled.div`
  position: relative;
`;

export const PanelList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${WHITE_COLOR};
  z-index: 101;

  & li {
    margin: 0 10px;
    line-height: 0;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
