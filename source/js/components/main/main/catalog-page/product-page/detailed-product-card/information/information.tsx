import React, { FC, useState } from 'react';

import UserButton from '../../../../../../other/buttons/user-button/user-button';

import {
  ProductInformationContainer,
  TopOfBlock,
  ProductName,
  ProductPrice,
  SwitchInformationButtonsContainer,
  SwitchInformationButton,
  InformationContainer,
  AddToBasket,
} from './s-information';

import IInformation from './interface';

const Information: FC<IInformation> = ({ productName, productPrice, description, techProperty }) => {
  const [typeOfInformation, setTypeOfInformation] = useState('description-info');

  // Обработчик событий по клику

  const handlerOfButtonInformation = (e: React.MouseEvent) => {
    if (e.target.tagName === 'BUTTON') {
      const target = e.target as HTMLButtonElement;
      setTypeOfInformation(e.target.id);
    }
  };

  //

  // Проверяет, равняется ли activeInformationSection (typeOfInformation) и передаваемый buttonID

  const compareActiveSectionAndButtonID = (activeInformationSection: string, buttonID: string): string | undefined => (activeInformationSection === buttonID ? 'active' : undefined);

  //

  return (
    <ProductInformationContainer>
      <TopOfBlock>
        <div>
          <ProductName>{productName}</ProductName>
          <ProductPrice>{productPrice}</ProductPrice>
        </div>
        <UserButton elemClass="favorite" title="Добавить в избранное" />
      </TopOfBlock>
      <div>
        <SwitchInformationButtonsContainer onClick={handlerOfButtonInformation}>
          <SwitchInformationButton className={compareActiveSectionAndButtonID(typeOfInformation, 'description-info')} id="description-info" type="button">Описание</SwitchInformationButton>
          <SwitchInformationButton className={compareActiveSectionAndButtonID(typeOfInformation, 'tech-info')} id="tech-info" type="button">Технические характеристики</SwitchInformationButton>
        </SwitchInformationButtonsContainer>
        <InformationContainer>{typeOfInformation === 'description-info' ? description : techProperty}</InformationContainer>
      </div>
      <AddToBasket type="button">В корзину</AddToBasket>
    </ProductInformationContainer>
  );
};

export default Information;
