import styled from 'styled-components';

import { WHITE_COLOR, MAIN_COLOR, PLAYFAIR_DISPLAY_FONT, transitionTemplate, MEDIA_SIZES } from '../../../../../../styles/variables';

import { Button as DefaultButtonStyle, DefaultButtonInteractiveStyles } from '../../../../../../styles/common/button/s-button';

export const Section = styled.section`
  padding: 20px 40px 40px;
  background-color: rgba(234, 228, 213, 0.38);
  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    padding: 66px 120px;
    display: flex;
    justify-content: space-between;
  }
`;

export const InformationContainer = styled.div`
  margin-bottom: 25px;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    margin-bottom: 0;
    width: 42%;
  }
`;

export const Headline = styled.h2`
  margin-bottom: 15px;
  font-size: .9rem;
  line-height: .9rem;
  color: #818181;
  text-transform: uppercase;
`;

export const Conditions = styled.p`
  font-family: ${PLAYFAIR_DISPLAY_FONT};
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2rem;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    font-size: 2.5rem;
    line-height: 2.8rem;
  }
`;

export const Form = styled.form`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    width: 44%;
  }
`;

export const Input = styled.input`
  margin-bottom: 25px;
  padding-right: 10px;
  padding-bottom: 10px;
  min-width: 120px;
  width: 100%;
  border-bottom: 2px solid ${MAIN_COLOR};

  &::placeholder {
    transition: ${transitionTemplate(['transform'], '.2')};
  }

  &:hover::placeholder {
    transform: translateY(-100%);
  }

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    margin-bottom: 0;
    margin-right: 20px;
    max-width: 278px;
  }
`;

export const Subscribe = styled(DefaultButtonStyle)`
  ${DefaultButtonInteractiveStyles};
  width: 100%;
  font-weight: 700;
  color: ${WHITE_COLOR};
  background-color: #31302C;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    width: unset;
  }
`;
