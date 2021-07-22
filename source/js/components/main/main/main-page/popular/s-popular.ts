import styled, { css } from 'styled-components';

import DefaultHeadline from '../../../../../styles/mixins/headline/headline';

import LearnMoreLink from '../../../../../styles/styled/learn-more-link/learn-more-link';

import { MEDIA_SIZES, PLAYFAIR_DISPLAY_FONT } from '../../../../../styles/variables';

export const Section = styled.section`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

export const TopSectionContainer = css`
  flex-direction: column;
`;

export const TopSectionHeadline = css`
  margin-bottom: 25px;
  padding: 0 15px;
  text-align: center;
`;

export const TopSectionLink = css`
  align-self: flex-end;
`;

export const topSectionStyles = {
  topSectionContainer: TopSectionContainer,
  topSectionHeadline: TopSectionHeadline,
  topSectionLink: TopSectionLink,
};

export const PopularHeadline = styled.h2`
  margin-bottom: 25px;
  padding: 0 15px;
  text-align: center;
  ${DefaultHeadline}
`;

export const ListItem = styled.li`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FDFDFB;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    position: relative;
    padding: 30px;
    align-items: stretch;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    padding: 40px;
  }
`;

export const ProductImgContainer = styled.figure`
  margin-bottom: 20px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-bottom: 0;
    transform: translate(-50%, -50%);
  }
`;

export const List = styled.ul`
  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: 35px;
    display: grid;
    grid-template-rows: minmax(467px, auto);
    grid-auto-rows: 220px;
    grid-template-areas: "first second second second"
                        "third third fourth fourth";
    grid-gap: 40px;

    ${ListItem}:nth-child(2) {
      grid-area: second;

      ${ProductImgContainer}::after {
        position: absolute;
        content: "";
        top: -1.7%;
        right: -25%;
        width: 239px;
        height: 100%;
        background-image: url('/img/ellipse2.png');
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
      }
    };

    ${ListItem}:nth-child(3) {
      grid-area: third;
    }

    ${ListItem}:last-of-type {
      grid-area: fourth;
    }

    ${ListItem} {
      &:nth-child(3),
      &:last-of-type {
        ${ProductImgContainer} {
          left: 70%;
        }
      }
    }
  }
`;

export const ProductName = styled.p`
  font-family: ${PLAYFAIR_DISPLAY_FONT};
  font-weight: 700;
`;

export const ProductPrice = styled.p`
  margin-bottom: 25px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: 0;
  }
`;

export const Link = styled(LearnMoreLink)`
  margin-top: auto;
  padding-left: 45px;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    align-self: flex-start;
  }
`;
