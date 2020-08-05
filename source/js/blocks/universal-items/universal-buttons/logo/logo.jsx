import React from 'react';
import { Link } from 'react-router-dom';

import { DefaultLogo } from '../../../svg-icons/watch-shop-logo';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="На главную страницу">
      <DefaultLogo />
    </Link>
  );
}
