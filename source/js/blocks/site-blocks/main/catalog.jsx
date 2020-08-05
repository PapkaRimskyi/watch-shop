import React from 'react';

import Breadcrumbs from '../../universal-items/universal-blocks/navigation/breadcrumbs/breadcrumbs';
import WatchCatalog from './catalog-components/watch-catalog/watch-catalog';
import Subscribe from '../../universal-items/universal-blocks/subscribe/subscribe';
import Accessories from './catalog-components/accessories/accessories';

export default function Catalog() {
  return (
    <main className="main-site main-catalog">
      <Breadcrumbs />
      <WatchCatalog catalogName="Мужские часы" />
      <Subscribe />
      <Accessories />
    </main>
  );
}
