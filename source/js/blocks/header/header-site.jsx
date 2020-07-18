/* eslint-disable react/prop-types */
import React from 'react';

import { CSSTransition } from 'react-transition-group';

import BurgerAndLogo from './header-components/burger-and-logo';
import SiteSectionNav from './header-components/site-section-navigation';
import UserButtonPanel from './header-components/user-button-panel';
import popupSwitch from '../HOC/popupSwitch';

function Header(props) {
  const { popupStatus, buttonHandler } = props;
  return (
    <header className="header-site">
      <section className="top-bar-site">
        <BurgerAndLogo buttonHandler={buttonHandler} />
        <CSSTransition in={popupStatus} classNames="animate" timeout={500} unmountOnExit>
          <SiteSectionNav />
        </CSSTransition>
        <UserButtonPanel />
      </section>
    </header>
  );
}

export default popupSwitch(Header);
