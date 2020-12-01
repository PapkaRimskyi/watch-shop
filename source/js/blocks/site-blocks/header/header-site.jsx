import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';

import BurgerAndLogo from './header-components/burger-and-logo/burger-and-logo';
import SiteSectionNav from './header-components/site-section-navigation/site-section-navigation';
import UserButtonPanel from './header-components/user-button-panel/user-button-panel';

import usePopupSwitch from '../../../custom-hooks/use-popup-switch';

function Header({ favoritesCount }) {
  const { popupStatus, popupButtonHandler } = usePopupSwitch('site-section-navigation');
  const { pathname } = useLocation();

  return (
    <header className={`header-site${classNames(pathname !== '/' ? ' header-site--other-page' : null)}`}>
      <section className="top-bar-site">
        <BurgerAndLogo popupButtonHandler={popupButtonHandler} />
        <SiteSectionNav popupStatus={popupStatus} popupButtonHandler={popupButtonHandler} />
        <UserButtonPanel favoritesCount={favoritesCount} />
      </section>
    </header>
  );
}

Header.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    favoritesCount: state.userSelectedProducts.favorite.length,
  };
}

export default connect(mapStateToProps)(Header);
