/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducers/main-reducer';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header-site';
import Main from './blocks/site-blocks/main/main-site';
import Footer from './blocks/site-blocks/footer/footer-site';

const root = document.getElementById('root');
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function MainWrapper() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header popupClassName="site-section-navigation" />
        <Main />
        <Footer />
      </HashRouter>
    </Provider>
  );
}

ReactDOM.render(<MainWrapper />, root);
