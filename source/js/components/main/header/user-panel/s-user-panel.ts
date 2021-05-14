import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const PanelList = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    margin: 0 10px;
    align-self: center;
  }

  & li a {
    display: inline-block;
    vertical-align: middle;
    line-height: 0;
  }
`;

export const SearchButton = styled.button`
  vertical-align: middle;
`;
