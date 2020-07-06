import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import Header from './blocks/header/header-site';

// eslint-disable-next-line react/prefer-stateless-function
class MainWrapper extends React.Component {
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

ReactDOM.render(<MainWrapper />, document.getElementById('root'));
