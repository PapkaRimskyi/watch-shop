import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const PanelList = styled.ul`
  display: flex;
  justify-content: space-between;

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
