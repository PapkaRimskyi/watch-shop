import React from 'react';

import PopularModels from './main-components/popular-models';
import Advantages from './main-components/advantages';
import OurNews from './main-components/our-news';

export default function Main() {
  return (
    <main className="main-site">
      <PopularModels />
      <Advantages />
      <OurNews />
    </main>
  );
}

// export default class Main extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <main className="main-site">

//       </main>
//     );
//   }
// }
