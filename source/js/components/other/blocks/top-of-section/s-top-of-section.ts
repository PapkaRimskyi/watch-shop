import styled from 'styled-components';

import WatchAll from '../../buttons/watch-all/watch-all';

import HeadlineStyles from '../../../../styles/mixins/headline/headline';

export const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  ${((props) => props.theme?.topSectionContainer)};
  flex-wrap: wrap;
`;

export const Headline = styled.h2`
  ${((props) => props.theme?.topSectionHeadline)};
  ${HeadlineStyles};
`;

export const Link = styled(WatchAll)`
  ${((props) => props.theme?.topSectionLink)};
`;
