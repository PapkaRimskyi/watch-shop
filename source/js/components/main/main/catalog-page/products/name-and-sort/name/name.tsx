import React, { FC } from 'react';

import NameHeadline from './s-name';

const Name: FC<{ sectionName: string }> = ({ sectionName }) => (
  <NameHeadline>{sectionName}</NameHeadline>
);

export default Name;
