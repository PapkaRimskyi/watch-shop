import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

export default function Main() {
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
          <PopupWithProducts sectionType="favorite" />
        </Route>
        <Route path="/basket-list">
          <PopupWithProducts sectionType="basket" />
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
