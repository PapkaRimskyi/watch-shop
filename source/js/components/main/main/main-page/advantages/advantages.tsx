import React, { FC } from 'react';

import SliderSwitch from '../../../../other/blocks/slider-switch/slider-switch';

import useSliderCount from '../../../../../hooks/use-slider-count/use-slider-count';

import { Section, List, Li, ImageContainer, InformationContainer, SliderHeadline, SliderText, CatalogLink } from './s-advantages';
import VisuallyHidden from '../../../../../styles/styled/visually-hidden/visually-hidden';

import data from './data/data';

import '../../../../../../img/decorative-photo/advantages__banner-1.jpg';

const Advantages: FC = () => {
  const { counter, increment, decrement } = useSliderCount(1, data.length);

  return (
    <Section>
      <VisuallyHidden>Слайдер с перечислением преимуществ наших часов</VisuallyHidden>
      <List counter={counter}>
        {data.map((slider, index) => (
          <Li key={slider.sliderHeadline}>
            <ImageContainer>
              <img src={slider.imgSrc} alt=" " />
            </ImageContainer>
            <InformationContainer>
              <SliderHeadline>{slider.sliderHeadline}</SliderHeadline>
              <SliderText>{slider.sliderText}</SliderText>
              <CatalogLink href="/catalog" as="a" tabIndex={index + 1 !== counter ? -1 : 0}>Смотреть каталог</CatalogLink>
            </InformationContainer>
          </Li>
        ))}
      </List>
      <SliderSwitch counter={counter} increment={increment} decrement={decrement} />
    </Section>
  );
};

export default Advantages;
