import styled from 'styled-components';

export const Section = styled.section``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & li {
    margin-right: 10px;
  }
`;

export const LinkToSocial = styled.a`
  display: flex;

  & svg {
    width: 25px;
    height: 25px;
  }
`;
