/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header-site';
import Index from './blocks/site-blocks/main/index';
import Catalog from './blocks/site-blocks/main/catalog';
import Footer from './blocks/site-blocks/footer/footer-site';

// eslint-disable-next-line react/prefer-stateless-function
class MainWrapper extends React.Component {
  render() {
    return (
      <>
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
