import styled from 'styled-components';

import { Button, DefaultButtonInteractiveStyles } from '../../../../../styles/common/button/s-button';

import HeadlineStyles from '../../../../../styles/common/headline/s-headline';

import { MEDIA_SIZES, transitionTemplate, WHITE_COLOR } from '../../../../../styles/variables';

export const Section = styled.section`
  margin-bottom: 45px;
  background: linear-gradient(90deg,#f7f5ef 34%,#fdfdfb 0);
  overflow-x: hidden;
`;

export const List = styled.ul<{ counter: number }>`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  transition: ${transitionTemplate(['translateX'])};
  transform: ${((props) => `translateX(${(props.counter - 1) * -100}%)`)};

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: 25px;
  }
`;

export const Li = styled.li`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 100%;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    padding: 25px 35px;
    padding-top: 40px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    justify-content: center;
  }
`;

export const ImageContainer = styled.figure`
  margin-bottom: 25px;
  line-height: 0;
  max-width: 400px;

  & img {
    width: 100%;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: 0;
    max-width: 50%;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    margin-right: 45px;
    max-width: none;

    & img {
      min-width: 521px;
      max-width: 521px;
      width: auto;
    }
  }
`;

export const InformationContainer = styled.div`
  max-width: 400px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: 0;
    max-width: 45%;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    max-width: 30%;
  }
`;

export const SliderHeadline = styled.h3`
  margin-bottom: 38px;
  ${HeadlineStyles};
`;

export const SliderText = styled.p`
  margin-bottom: 45px;
  color: '#444240';
`;

export const CatalogLink = styled(Button) <{ tabIndex: string }>`
  color: ${WHITE_COLOR};
  background-color: #D4B098;
  ${DefaultButtonInteractiveStyles};
`;
