import React, { FC } from 'react';

import Slider from '../../../other/blocks/slider/slider';

import VisuallyHidden from '../../../../styles/visually-hidden';

import useSliderCount from '../../../../hooks/use-slider-count/use-slider-count';

import { Section, Wrapper, SliderContainer, SliderInformationContainer, ImageContainer, SliderHeadline, SliderText, CatalogLink } from './s-advantages';

import data from './data/data';

import '../../../../../img/decorative-photo/advantages__banner-1.jpg';

const Advantages: FC = () => {
  const { counter, increment, decrement } = useSliderCount(1, data.length);

  return (
    <Section>
      <VisuallyHidden>Преимущества наших часов</VisuallyHidden>
      <Wrapper>
        {data.map((slider) => (
          <SliderContainer key={slider.sliderHeadline}>
            <ImageContainer>
              <img src={slider.imgSrc} alt=" " />
            </ImageContainer>
            <SliderInformationContainer>
              <SliderHeadline>{slider.sliderHeadline}</SliderHeadline>
              <SliderText>{slider.sliderText}</SliderText>
              <CatalogLink href="/catalog" as="a">Смотреть каталог</CatalogLink>
            </SliderInformationContainer>
          </SliderContainer>
        ))}
      </Wrapper>
      <Slider counter={counter} increment={increment} decrement={decrement} />
    </Section>
  );
};

export default Advantages;
