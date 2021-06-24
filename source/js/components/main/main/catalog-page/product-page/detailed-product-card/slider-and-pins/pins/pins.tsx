import React, { FC } from 'react';

import { List, Li, Link, Img } from './s-pins';

const Pins: FC = ({ data }) => (
  <List>
    {data.map((image, index) => (
      <Li key={`${image}-pin`}>
        <Link href={`#slide-${index + 1}`}>
          <Img src={image} alt="" />
        </Link>
      </Li>
    ))}
  </List>
);

export default Pins;
