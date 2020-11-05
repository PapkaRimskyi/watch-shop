import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { addToFavorite, addToBasket } from '../../../redux/actions/basket-and-favorite/basket-and-favorite';

// Импорты главной страницы

import YearCollection from './index-components/year-collection/year-collection';
import PopularModels from './index-components/popular-models/popular-models';
import Advantages from './index-components/advantages/advantages';
import OurNews from './index-components/our-news/our-news';

//

// Импорты каталога

import Breadcrumbs from '../../universal-items/universal-blocks/navigation/breadcrumbs/breadcrumbs';
import WatchCatalog from './catalog-components/watch-catalog/watch-catalog';
import Subscribe from '../../universal-items/universal-blocks/subscribe/subscribe';
import Accessories from './catalog-components/accessories/accessories';

//

// Импорты страниц с товарами в избранном и корзине

import PopupWithProducts from '../../universal-items/universal-blocks/popup-with-products/popup-with-products';

//

import { FAVORITE, BASKET } from '../../../variables/variables';

function Main({ favorite, basket, toFavorite, toBasket }) {
  return (
    <main className="main-site">
      <Switch>
        <Route path="/catalog">
          <Breadcrumbs />
          <WatchCatalog catalogName="Мужские часы" />
          <Subscribe />
          <Accessories />
        </Route>
        <Route path="/favorite-list">
          <PopupWithProducts sectionType={FAVORITE} popupProductData={favorite} workWithStorage={toFavorite} />
        </Route>
        <Route path="/basket-list">
          <PopupWithProducts sectionType={BASKET} popupProductData={basket} workWithStorage={toBasket} />
        </Route>
        <Route exact path="/">
          <YearCollection />
          <PopularModels />
          <Advantages />
          <OurNews />
        </Route>
      </Switch>
    </main>
  );
}

Main.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.object),
  basket: PropTypes.arrayOf(PropTypes.object),
  toFavorite: PropTypes.func.isRequired,
  toBasket: PropTypes.func.isRequired,
};

Main.defaultProps = {
  favorite: [],
  basket: [],
};

function mapStateToProps(state) {
  return {
    favorite: state.userSelectedProducts.favorite,
    basket: state.userSelectedProducts.basket,
  };
}

const mapDispatchToProps = {
  toFavorite: addToFavorite,
  toBasket: addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
