import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';

import UserButton from '../../../../universal-items/universal-buttons/user-button/user-button';
import SearchSite from '../../../../universal-items/universal-blocks/search-site/search-site';

import userButtonsModel from './model/user-button-model';

function UserButtonPanel({ favoritesCount }) {
  const [siteSearch, setSiteSearch] = useState(false);

  // Обработчик по клику на кнопку "поиск по сайту".

  function searchHandler(e) {
    e.preventDefault();
    setSiteSearch((prevState) => !prevState);
  }

  //

  return (
    <nav className="user-button-panel" aria-label="Пользовательские кнопки">
      {userButtonsModel.map((buttonInfo) => <UserButton key={buttonInfo.ariaLabel} favoritesCount={buttonInfo.className === 'favorite' ? favoritesCount : null} buttonInfo={buttonInfo} handler={buttonInfo.className === 'search' ? searchHandler : null} />)}
      <CSSTransition in={siteSearch} classNames="animate" timeout={200} unmountOnExit>
        <SearchSite />
      </CSSTransition>
    </nav>
  );
}

UserButtonPanel.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    favoritesCount: state.userSelectedProducts.favorites.length,
  };
}

export default connect(mapStateToProps)(UserButtonPanel);
