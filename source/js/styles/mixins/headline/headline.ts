import { css } from 'styled-components';

import { MEDIA_SIZES, PLAYFAIR_DISPLAY_FONT } from '../../variables';

const HeadlineStyles = css`
  font-family: ${PLAYFAIR_DISPLAY_FONT};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
`;

export default HeadlineStyles;
