import React from 'react';
import { CSSTransition } from 'react-transition-group';

import UserButton from '../../../../universal-items/universal-buttons/user-button/user-button';
import SearchSite from '../../../../universal-items/universal-blocks/search-site/search-site';

import userButtonsModel from '../../model/user-button-model';

export default class UserButtonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { siteSearch: false };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
    this.setState((prevState) => ({ siteSearch: !prevState.siteSearch }));
  }

  render() {
    const { siteSearch } = this.state;
    return (
      <nav className="user-button-panel" aria-label="Пользовательские кнопки">
        {userButtonsModel.map((buttonInfo) => <UserButton key={buttonInfo.ariaLabel} buttonInfo={buttonInfo} handler={buttonInfo.className === 'search' ? this.searchHandler : null} />)}
        <CSSTransition in={siteSearch} classNames="animate" timeout={200} unmountOnExit>
          <SearchSite />
        </CSSTransition>
      </nav>
    );
  }
}
