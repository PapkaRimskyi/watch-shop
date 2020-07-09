import React from 'react';

import PopularModels from './main-components/popular-models';
import Advantages from './main-components/advantages';

export default function Main() {
  return (
    <main className="main-site">
      <PopularModels />
      <Advantages />
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
