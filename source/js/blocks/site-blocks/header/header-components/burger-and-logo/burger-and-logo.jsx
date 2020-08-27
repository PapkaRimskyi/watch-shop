import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../../universal-items/universal-buttons/logo/logo';
import BurgerButton from '../../../../universal-items/universal-buttons/burger-button/burger-button';

export default function BurgerAndLogo({ popupButtonHandler }) {
  return (
    <div className="burger-and-logo">
      <BurgerButton popupButtonHandler={popupButtonHandler} />
      <Logo />
    </div>
  );
}

BurgerAndLogo.propTypes = {
  popupButtonHandler: PropTypes.func.isRequired,
};
