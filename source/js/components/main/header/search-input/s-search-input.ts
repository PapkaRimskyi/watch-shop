import styled from 'styled-components';

import { BLACK_COLOR, WHITE_COLOR } from '../../../../styles/variables';

const InputField = styled.input`
  position: absolute;
  top: 0;
  right: 110%;
  padding: 0 10px;
  width: 100px;
  font: inherit;
  color: inherit;
  background-color: ${WHITE_COLOR};
  border-bottom: 1px solid ${BLACK_COLOR};
  z-index: 99;
`;

export default InputField;
