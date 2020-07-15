import React from 'react';

import Breadcrumbs from '../utils/breadcrumbs';
import WatchCatalog from './main-components/watch-catalog';

export default function Catalog() {
  return (
    <main className="main-site main-catalog">
      <Breadcrumbs />
      <WatchCatalog />
    </main>
  );
}
