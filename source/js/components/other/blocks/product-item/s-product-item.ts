import styled from 'styled-components';

import { transitionTemplate } from '../../../../styles/variables';

export const Li = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #FDFDFB, #FDFDFB);
`;

export const InformationSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfoContainer = styled.div`
  margin-right: 15px;
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
  margin-top: auto;
  text-align: center;
`;

export const Img = styled.img`
  /* width: 170px; */
  /* height: 287px; */
  /* object-fit: cover; */
`;
