/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducers/main-reducer';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header-site';
import Index from './blocks/site-blocks/main/index';
import Catalog from './blocks/site-blocks/main/catalog';
import Footer from './blocks/site-blocks/footer/footer-site';

const root = document.getElementById('root');
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function MainWrapper() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header popupClassName="site-section-navigation" />
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </Provider>
  );
}

ReactDOM.render(<MainWrapper />, root);
