import styled from 'styled-components';

import { INPUT_LABEL_ACTIVE_COLOR, INPUT_LABEL_HOVER_COLOR, MAIN_COLOR, MEDIA_SIZES, OUTLINE_BORDER_COLOR, transitionTemplate } from '../../../../../../../styles/variables';

export const Form = styled.form`
  width: 100%;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    width: 20%;
  }
`;

export const Fieldset = styled.fieldset`
  &:not(:last-of-type) {
    margin-bottom: 37px;
  }
`;

export const Legend = styled.legend`
  position: relative;
  margin-bottom: 28px;
  padding-right: 25px;
  display: block;
  width: 100%;
  color: #444240;
  cursor: pointer;
  transition: ${transitionTemplate(['opacity'])};

  &::after,
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    right: 4%;
    width: 0;
    height: 10px;
    border: 1px solid ${MAIN_COLOR};
    transition: ${transitionTemplate(['opacity'])};
  }

  &::after {
    transform: translateY(-50%) rotate(90deg);
  }

  &::before {
    display: none;
    transform: translateY(-50%);
  }

  &:hover,
  &:focus-visible {
    opacity: .6;

    &::before,
    &::after {
      opacity: .6;
    }
  }

  &:active {
    opacity: .3;

    &::before,
    &::after {
      opacity: .3;
    }
  }

  /* &.active {
    &::before {
      position: absolute;
      content: "";
      top: 50%;
      right: 4%;
      width: 0;
      height: 10px;
      border: 1px solid ${MAIN_COLOR};
    }
  } */
`;

export const Li = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  transition: ${transitionTemplate(['color'])};
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  & + ${InputLabel} {
    &::before {
      position: absolute;
      content: "";
      top: 42%;
      left: 0;
      width: 12px;
      height: 12px;
      border: 2px solid #909090;
      transform: translateY(-50%);
      transition: ${transitionTemplate(['opacity'], '.2')};
    }
  }

  &:hover + ${InputLabel},
  &:focus-visible + ${InputLabel} {
    color: ${INPUT_LABEL_HOVER_COLOR};

    &::before {
      opacity: .6;
    }
  }

  &:focus-visible + ${InputLabel} {
    &::before {
      outline: 2px solid ${OUTLINE_BORDER_COLOR};
    }
  }

  &:active + ${InputLabel} {
    color: ${INPUT_LABEL_ACTIVE_COLOR};
  }

  &:checked + ${InputLabel} {
    &::before {
      background: #6F6E6D url("/assets/img/check-mark.svg") no-repeat center center;
      background-size: 10px;
    }
  }
`;
