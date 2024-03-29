import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/main/header/header';
import Main from './components/main/main/main';
import Footer from './components/main/footer/footer';

import GlobalStyles from './styles/global-styles';
import ScrollToTop from './utils/scroll-to-top/scroll-to-top';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
