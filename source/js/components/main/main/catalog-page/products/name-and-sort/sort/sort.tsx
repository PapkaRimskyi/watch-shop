import React, { FC, useState } from 'react';

import VisuallyHidden from '../../../../../../../styles/visually-hidden';

import { Section, Label, SortInput, List } from './s-sort';

import data from './data/data';

import '../../../../../../../../img/unique-icon/arrow.svg';

const Sort: FC = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const [defaultSortType, setDefaultSortType] = useState('популярности');

  // Обработчик сортировки по клику и нажатию Enter

  const inputClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setPopupStatus((prevState) => !prevState);
  };

  const inputEnterHandler = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setPopupStatus((prevState) => !prevState);
    }
  };

  //

  // Обработка клика внутри списка доступных сортировок

  const popupClickListHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLAnchorElement) {
      const { textContent } = e.target as HTMLAnchorElement;
      setDefaultSortType((prevState) => textContent || prevState);
      setPopupStatus(false);
    }
  };

  //

  return (
    <Section>
      <VisuallyHidden>Сортировка товара</VisuallyHidden>
      <Label htmlFor="sort-input">Сортировать по <SortInput onClick={inputClickHandler} onKeyUp={inputEnterHandler} id="sort-input" type="text" value={defaultSortType} title="Тип сортировки" readOnly /></Label>
      {popupStatus && (
        <List onClick={popupClickListHandler}>
          {data.map((type) => (
            <li key={type}>
              <a href=" " title={`Сортировка по ${type}`}>{type}</a>
            </li>
          ))}
        </List>
      )}
    </Section>
  );
};

export default Sort;
