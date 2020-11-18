/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';

// Использую HashRouter из-за того, что страница проекта размещена на github-pages.
import { HashRouter } from 'react-router-dom';
//

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Перематывает страницу в начало, когда адрес в браузере меняется.
import ScrollToTop from './utils/scroll-to-top';
//

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
        <ScrollToTop />
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </Provider>
  );
}

ReactDOM.render(<MainWrapper />, root);
