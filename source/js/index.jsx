import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import Header from './blocks/header/header-site';
import Main from './blocks/main/main-site';
import Footer from './blocks/footer/footer-site';

// eslint-disable-next-line react/prefer-stateless-function
class MainWrapper extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<MainWrapper />, document.getElementById('root'));
