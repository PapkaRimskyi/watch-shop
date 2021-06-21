import React, { FC } from 'react';

import { Container, Headline, Link } from './s-top-of-section';

import ITopOfSection from './interface';

const TopSection: FC<ITopOfSection> = ({ href, sectionName }) => (
  <Container>
    <Headline>{sectionName}</Headline>
    <Link href={href} />
  </Container>
);

export default TopSection;
