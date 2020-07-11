/* eslint-disable react/prop-types */
import React from 'react';

import Logo from '../../universal-buttons/logo';
import BurgerButton from '../../universal-buttons/burger-button';

export default function BurgerAndLogo(props) {
  const { burgerHandler } = props;
  return (
    <div className="burger-and-logo">
      <BurgerButton burgerHandler={burgerHandler} />
      <Logo />
    </div>
  );
}
