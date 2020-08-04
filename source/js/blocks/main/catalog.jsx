import React from 'react';

import Breadcrumbs from '../universal-blocks/navigation-blocks/breadcrumbs';
import WatchCatalog from './main-catalog-component/watch-catalog';
import Subscribe from '../universal-blocks/subscribe';

export default function Catalog() {
  return (
    <main className="main-site main-catalog">
      <Breadcrumbs />
      <WatchCatalog catalogName="Мужские часы" />
      <Subscribe />
    </main>
  );
}
