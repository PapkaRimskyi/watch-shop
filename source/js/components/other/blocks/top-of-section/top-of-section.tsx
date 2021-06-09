import React, { FC } from 'react';

import { Container, Headline, Link } from './s-top-of-section';

const TopSection: FC<{ href: string, sectionName: string }> = ({ href, sectionName }) => (
  <Container>
    <Headline>{sectionName}</Headline>
    <Link href={href} />
  </Container>
);

export default TopSection;
