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
  &:not(:last-of-type) {
    position: relative;
    margin-right: 10px;
    padding-right: 25px;

    &::after {
      position: absolute;
      content: "";
      top: 50%;
      right: 10%;
      width: 5px;
      height: 10px;
      transform: translateY(-50%) rotate(-180deg);
      background: url('/assets/img/arrow.svg') no-repeat center center;
    }
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
