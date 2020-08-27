import React from 'react';
import { CSSTransition } from 'react-transition-group';

import BurgerAndLogo from './header-components/burger-and-logo/burger-and-logo';
import SiteSectionNav from './header-components/site-section-navigation/site-section-navigation';
import UserButtonPanel from './header-components/user-button-panel/user-button-panel';

import usePopupSwitch from '../../../custom-hooks/use-popup-switch';

export default function Header() {
  const { popupStatus, popupButtonHandler } = usePopupSwitch('site-section-navigation');

  return (
    <header className="header-site">
      <section className="top-bar-site">
        <BurgerAndLogo popupButtonHandler={popupButtonHandler} />
        <CSSTransition in={popupStatus} classNames="animate" timeout={300} unmountOnExit>
          <SiteSectionNav popupButtonHandler={popupButtonHandler} />
        </CSSTransition>
        <UserButtonPanel />
      </section>
    </header>
  );
}
