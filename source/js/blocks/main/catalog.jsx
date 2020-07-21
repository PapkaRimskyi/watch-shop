import React from 'react';

import Breadcrumbs from '../utils/breadcrumbs';
import WatchCatalog from './main-components/watch-catalog';
import Subscribe from '../utils/subscribe';

export default function Catalog() {
  return (
    <main className="main-site main-catalog">
      <Breadcrumbs />
      <WatchCatalog />
      <Subscribe />
    </main>
  );
}
