import React from 'react';
import { CSSTransition } from 'react-transition-group';

import BurgerAndLogo from './header-components/burger-and-logo/burger-and-logo';
import SiteSectionNav from './header-components/site-section-navigation/site-section-navigation';
import UserButtonPanel from './header-components/user-button-panel/user-button-panel';

import popupSwitch from '../../../HOC/popupSwitch';

function Header({ popupStatus, buttonHandler, popupListItemHandler }) {
  return (
    <header className="header-site">
      <section className="top-bar-site">
        <BurgerAndLogo buttonHandler={buttonHandler} />
        <CSSTransition in={popupStatus} classNames="animate" timeout={300} unmountOnExit>
          <SiteSectionNav popupListItemHandler={popupListItemHandler} />
        </CSSTransition>
        <UserButtonPanel />
      </section>
    </header>
  );
}

export default popupSwitch(Header);