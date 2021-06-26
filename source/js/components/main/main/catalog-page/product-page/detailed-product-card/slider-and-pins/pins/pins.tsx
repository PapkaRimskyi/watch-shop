import React, { FC } from 'react';

import { List, Li, Link, Img } from './s-pins';

import IPins from './interface';

const Pins: FC<IPins> = ({ data, sliderRef }) => {
  const pinListClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = e.target as HTMLElement;
    if (elem.closest('a')) {
      const linkElem = elem.closest('a') as HTMLAnchorElement;
      const pinSliderNumber = Number(linkElem.id.match(/\d/gi)?.join(''));
      const itemWidth = sliderRef.current.firstChild.clientWidth;
      sliderRef.current.scrollLeft = itemWidth * (pinSliderNumber - 1);
    }
  };

  return (
    <List onClick={pinListClickHandler}>
      {data.map((image, index) => (
        <Li key={`${image}-pin`}>
          <Link id={`slide-${index + 1}`} href={`#slide-${index + 1}`}>
            <Img src={image} alt="Мини-превью товара" />
          </Link>
        </Li>
      ))}
    </List>
  );
};

export default Pins;
