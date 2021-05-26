import styled from 'styled-components';

import { MARGIN_AUTO, transitionTemplate } from '../../../../styles/variables';

const List = styled.ul`
  margin: ${MARGIN_AUTO};
  margin-right: 55%;
  width: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li:last-of-type svg {
    transform: rotate(180deg);
  }

  & button {
    transition: ${transitionTemplate(['opacity'])};

    &:hover,
    &:focus-visible {
      opacity: .6;
    }

    &:active {
      opacity: .3;
    }
  }
`;

export default List;
