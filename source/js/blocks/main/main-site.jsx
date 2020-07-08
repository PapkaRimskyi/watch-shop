import React from 'react';

import PopularModels from './main-components/popular-models';

export default function Main() {
  return (
    <main className="main-site">
      <PopularModels />
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
