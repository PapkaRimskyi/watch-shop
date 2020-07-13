/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../sass/style.scss';

import Header from './blocks/header/header-site';
import Main from './blocks/main/main-site';
import Catalog from './blocks/main/catalog';
import Footer from './blocks/footer/footer-site';

// eslint-disable-next-line react/prefer-stateless-function
class MainWrapper extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <MainWrapper />
  </HashRouter>,
  document.getElementById('root'),
);
