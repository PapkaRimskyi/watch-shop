import styled from 'styled-components';

import { MEDIA_SIZES } from '../../../../styles/variables';

export const Section = styled.section`
  padding: 50px 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    margin-bottom: 30px;
    justify-content: space-between;
    box-shadow: 0 8px 5px -4px rgb(0 0 0 / 25%);
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    padding: 50px 50px 0;
  }
`;

export const MainHeadline = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const DescriptionContainer = styled.div`
  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    margin-bottom: 150px;
    padding-left: 70px;
  }
`;

export const CollectionHeadline = styled.h2`
  margin-bottom: 16px;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 2.5rem;

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: 50%;
      left: -65px;
      width: 50px;
      height: 0;
      transform: translateY(-50%);
      border: 1px solid #8B8371;
    }
  }
`;

export const Type = styled.span`
  margin-bottom: 39px;
  display: inline-block;
  font-size: 1.9rem;
  line-height: 1.7rem;
`;

export const Description = styled.p`
  margin-bottom: 64px;
  max-width: 280px;
  color: rgba(27, 26, 23, .8);
`;

export const ExampleWatchContainer = styled.div`
  display: none;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}px) {
    position: relative;
    display: block;
    text-align: center;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: -30%;
      width: 100%;
      height: 100%;
      background-image: url('assets/img/ellipse.png');
      background-repeat: no-repeat;
      background-size: contain;
      z-index: -1;
    }

    & p {
      display: none;
    }
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    position: relative;
    padding: 0 35px;
    display: flex;
    justify-content: space-between;

    & p {
      position: absolute;
      display: block;
    }

    & p:first-of-type::after,
    & p:last-of-type::before {
      position: absolute;
      content: "";
      top: 50%;
      width: 50px;
      height: 0;
      transform: translateY(-50%);
      border: 1px solid #8B8371;
    }

    & p:first-of-type {
      top: 15%;
      left: 0;

      &::after {
        left: 110%;
      }
    }

    & p:last-of-type {
      bottom: 15%;
      right: 0;

      &::before {
        right: 110%;
      }
    }
  }
`;

export const ExampleImg = styled.img`
  margin-bottom: -18px;
  width: 180px;
  object-fit: contain;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: -25px;
    width: 250px;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    margin-bottom: -28px;
    width: 100%;
  }
`;