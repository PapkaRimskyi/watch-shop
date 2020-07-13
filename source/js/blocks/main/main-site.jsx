import React from 'react';

import YearCollection from './main-components/year-collection';
import PopularModels from './main-components/popular-models';
import Advantages from './main-components/advantages';
import OurNews from './main-components/our-news';

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
