import React, { FC, useState } from 'react';

import SearchInput from '../search-input/search-input';

import { Container, PanelList } from './s-user-panel';

import UserButton from '../../../other/buttons/user-button/user-button';

const UserPanel: FC = () => {
  const [searchStatus, setSearchStatus] = useState(false);

  // Обработчик на клик

  const searchInputHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchStatus((prevState) => !prevState);
  };

  //

  return (
    <Container>
      {searchStatus && <SearchInput status={searchStatus} />}
      <PanelList>
        <li>
          <UserButton elemClass="search" title="Поиск" handler={searchInputHandler} />
        </li>
        <li>
          <UserButton elemClass="favorite" title="В избранное" />
        </li>
        <li>
          <UserButton elemClass="basket" title="В корзину" />
        </li>
      </PanelList>
    </Container>
  );
};

export default UserPanel;
