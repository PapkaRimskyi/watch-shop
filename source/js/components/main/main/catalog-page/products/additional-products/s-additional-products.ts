import styled, { css } from 'styled-components';

import { MEDIA_SIZES } from '../../../../../../styles/variables';

import Button from '../../../../../other/buttons/arrow-button/arrow-button';

export const Section = styled.section`
  margin-bottom: 75px;
`;

export const TopSectionContainer = css`
  justify-content: space-between;
`;

export const topSectionStyles = {
  topSectionContainer: TopSectionContainer,
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    justify-content: space-between;
  }
`;

export const ContainerForList = styled.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 0;
  }

  & > ul {
    scroll-snap-align: start;
  }
`;

export const List = styled.ul`
  position: relative;
  width: 90%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 100%;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 0;
  }

  & > li {
    scroll-snap-align: start;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    grid-template-columns: 30% 30% 30%;
    grid-auto-columns: 30%;
  }
`;

export const ArrowButton = styled(Button)`
  display: none;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    display: inline-block;
  }
`;
