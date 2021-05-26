import styled from 'styled-components';
import { FACEBOOK_DEFAULT_COLOR, FACEBOOK_HOVER_COLOR, INSTAGRAM_DEFAULT_COLOR, INSTAGRAM_HOVER_COLOR, transitionTemplate, TWITTER_DEFAULT_COLOR, TWITTER_HOVER_COLOR } from '../../../../styles/variables';

export const Section = styled.section``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & li {
    margin-right: 10px;
  }
`;

export const LinkToSocial = styled.a`
  display: flex;

  &[title*="instagram"] {
    & svg path {
      stroke: ${INSTAGRAM_DEFAULT_COLOR};
    }

    &:hover svg path,
    &:focus-visible svg path {
      stroke: ${INSTAGRAM_HOVER_COLOR};
    }
  }

  &[title*="facebook"] {
    & svg path {
      fill: ${FACEBOOK_DEFAULT_COLOR};
    }

    &:hover svg path,
    &:focus-visible svg path {
      fill: ${FACEBOOK_HOVER_COLOR};
    }
  }

  &[title*="twitter"] {
    & svg path {
      fill: ${TWITTER_DEFAULT_COLOR};
    }

    &:hover svg path,
    &:focus-visible svg path {
      fill: ${TWITTER_HOVER_COLOR};
    }
  }

  &:active svg path {
    opacity: .6;
  }

  & svg {
    width: 25px;
    height: 25px;
  }

  & svg path {
    transition: ${transitionTemplate(['stroke', 'fill', 'opacity'])}
  }
`;
