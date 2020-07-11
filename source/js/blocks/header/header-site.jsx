import React from 'react';

import { CSSTransition } from 'react-transition-group';

import BurgerAndLogo from './header-components/burger-and-logo';
import SiteSectionNav from './header-components/site-section-navigation';
import UserButtonPanel from './header-components/user-button-panel';
import YearCollection from './header-components/year-collection';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBurgerClicked: false };

    this.burgerHandler = this.burgerHandler.bind(this);
    this.whereBeenThatClick = this.whereBeenThatClick.bind(this);
  }

  setClosingPopupHandler() {
    document.addEventListener('click', this.whereBeenThatClick);
  }

  whereBeenThatClick(e) {
    if (!e.target.closest('.site-section-navigation')) {
      this.setState((prevState) => ({ isBurgerClicked: !prevState.isBurgerClicked }));
      document.removeEventListener('click', this.whereBeenThatClick);
    }
  }

  burgerHandler(e) {
    e.preventDefault();
    const { isBurgerClicked } = this.state;
    if (!isBurgerClicked) {
      this.setClosingPopupHandler();
    } else {
      document.removeEventListener('click', this.whereBeenThatClick);
    }
    this.setState((prevState) => ({ isBurgerClicked: !prevState.isBurgerClicked }));
  }

  render() {
    const { isBurgerClicked } = this.state;
    return (
      <header className="header-site">
        <section className="top-bar-site">
          <BurgerAndLogo burgerHandler={this.burgerHandler} />
          <CSSTransition in={isBurgerClicked} classNames="animate" timeout={500} unmountOnExit>
            <SiteSectionNav />
          </CSSTransition>
          <UserButtonPanel />
        </section>
        <YearCollection />
      </header>
    );
  }
}
