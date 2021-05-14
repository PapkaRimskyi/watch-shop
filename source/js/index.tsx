import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/main/header/header';
import Main from './components/main/main/main';

import GlobalStyles from './styles/global-styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
