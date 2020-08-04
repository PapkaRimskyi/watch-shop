import React from 'react';

import YearCollection from './main-site-component/year-collection';
import PopularModels from './main-site-component/popular-models';
import Advantages from './main-site-component/advantages';
import OurNews from './main-site-component/our-news';

export default function Main() {
  return (
    <main className="main-site">
      <YearCollection />
      <PopularModels />
      <Advantages />
      <OurNews />
    </main>
  );
}
