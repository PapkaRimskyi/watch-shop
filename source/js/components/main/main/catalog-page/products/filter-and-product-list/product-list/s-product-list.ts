import styled from 'styled-components';
import { MEDIA_SIZES, transitionTemplate } from '../../../../../../../styles/variables';

export const Section = styled.section`
  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    width: 60%;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    width: 70%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Li = styled.li`
  padding: 20px;
  background: linear-gradient(0deg, #FDFDFB, #FDFDFB);
`;

export const InformationSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.a`
  font-weight: 700;
  color: #444240;
  text-transform: uppercase;
  transition: ${transitionTemplate(['letter-spacing', 'opacity'], '.2')};

  &:hover,
  &:focus-visible {
    letter-spacing: .1rem;
  }

  &:active {
    opacity: .6;
  }
`;

export const ProductPrice = styled.p`
  color: #636261;
`;

export const ButtonList = styled.ul`
  min-width: 55px;
  display: flex;
  justify-content: space-between;
`;

export const Figure = styled.figure`
  text-align: center;
`;

export const Img = styled.img`
  /* width: 170px; */
  /* height: 287px; */
  /* object-fit: cover; */
`;
