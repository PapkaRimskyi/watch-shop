import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import UserButton from '../../../../universal-items/universal-buttons/user-button/user-button';
import SearchSite from '../../../../universal-items/universal-blocks/search-site/search-site';

import userButtonsModel from '../../model/user-button-model';

export default function UserButtonPanel() {
  const [siteSearch, setSiteSearch] = useState(false);

  function searchHandler(e) {
    e.preventDefault();
    setSiteSearch((prevState) => !prevState);
  }

  return (
    <nav className="user-button-panel" aria-label="Пользовательские кнопки">
      {userButtonsModel.map((buttonInfo) => <UserButton key={buttonInfo.ariaLabel} buttonInfo={buttonInfo} handler={buttonInfo.className === 'search' ? searchHandler : null} />)}
      <CSSTransition in={siteSearch} classNames="animate" timeout={200} unmountOnExit>
        <SearchSite />
      </CSSTransition>
    </nav>
  );
}
