import styled from 'styled-components';

import { MAIN_COLOR } from '../../../../../../../styles/variables';

export const Label = styled.label`
  color: #BDB9B5;
  &,
  & * {
    cursor: pointer;
  }
`;

export const SortInput = styled.input`
  padding-right: 18px;
  width: 130px;
  color: ${MAIN_COLOR};
  background: url('assets/img/arrow.svg') no-repeat center right;
  background-size: cover;
`;
