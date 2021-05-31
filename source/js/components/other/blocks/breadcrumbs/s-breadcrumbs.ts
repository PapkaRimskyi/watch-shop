import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { transitionTemplate } from '../../../../styles/variables';

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  position: relative;
  padding-right: 25px;
  min-width: 100px;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 4px;
    height: 7px;
    background: url('assets/img/arrow.svg') no-repeat center center;
    background-size: cover;
  }
`;

export const LinkTo = styled(NavLink)`
  color: #BDB9B5;
  transition: ${transitionTemplate(['color', 'opacity'])};

  &.active {
    color: #555248;
  }

  &:hover,
  &:focus-visible {
    color: #555248;
  }

  &:active,
  &.active:active {
    opacity: .6;
  }
`;
