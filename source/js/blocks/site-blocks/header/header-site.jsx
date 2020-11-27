import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';

import BurgerAndLogo from './header-components/burger-and-logo/burger-and-logo';
import SiteSectionNav from './header-components/site-section-navigation/site-section-navigation';
import UserButtonPanel from './header-components/user-button-panel/user-button-panel';

import usePopupSwitch from '../../../custom-hooks/use-popup-switch';

function Header({ favoritesCount }) {
  const { popupStatus, popupButtonHandler } = usePopupSwitch('site-section-navigation');

  return (
    <header className="header-site">
      <section className="top-bar-site">
        <BurgerAndLogo popupButtonHandler={popupButtonHandler} />
        <CSSTransition in={popupStatus} classNames="fade" timeout={300} unmountOnExit>
          <SiteSectionNav popupButtonHandler={popupButtonHandler} />
        </CSSTransition>
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
