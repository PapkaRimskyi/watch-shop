import React from 'react';

import YearCollection from './index-components/year-collection/year-collection';
import PopularModels from './index-components/popular-models/popular-models';
import Advantages from './index-components/advantages/advantages';
import OurNews from './index-components/our-news/our-news';

export default function Index() {
  return (
    <main className="main-site">
      <YearCollection />
      <PopularModels />
      <Advantages />
      <OurNews />
    </main>
  );
}
