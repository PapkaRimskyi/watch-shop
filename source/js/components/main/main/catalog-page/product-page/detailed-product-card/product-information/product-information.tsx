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
} from './s-product-information';

const ProductInformation: FC = () => {
  const [typeOfInformation, setTypeOfInformation] = useState('description-info');
  const descriptionText = `
  Наручные часы KULTE, разработанные датским дизайнером Хэннингом Коппелем, были выпущены в 1982 году. Они были встречены аплодисментами, а дизайн считался революционным.

  Общая эстетика минималистична, а острые, плавные линии корпуса стали легендарными. Механизм Swiss Made обеспечивает высокий уровень технических характеристик.

  Наручные часы KULTE — это образец датского дизайнерского наследия, история баланса и точности как внутри, так и снаружи.
  `;
  const techText = 'asdadasdasdasdasdasd';

  // Обработчик событий по клику

  const handlerOfButtonInformation = (e: React.MouseEvent) => {
    if (e.target.tagName === 'BUTTON') {
      const target = e.target as HTMLButtonElement;
      setTypeOfInformation(e.target.id);
    }
  };

  //

  // Проверяет, равняется ли activeInformationSection (typeOfInformation) и передаваемый buttonID

  const compareSomeThing = (activeInformationSection: string, buttonID: string): string | undefined => (activeInformationSection === buttonID ? 'active' : undefined);

  //

  return (
    <ProductInformationContainer>
      <TopOfBlock>
        <div>
          <ProductName>kulte, 26 мм</ProductName>
          <ProductPrice>12 700 Р</ProductPrice>
        </div>
        <UserButton elemClass="favorite" title="Добавить в избранное" />
      </TopOfBlock>
      <div>
        <SwitchInformationButtonsContainer onClick={handlerOfButtonInformation}>
          <SwitchInformationButton className={compareSomeThing(typeOfInformation, 'description-info')} id="description-info" type="button">Описание</SwitchInformationButton>
          <SwitchInformationButton className={compareSomeThing(typeOfInformation, 'tech-info')} id="tech-info" type="button">Технические характеристики</SwitchInformationButton>
        </SwitchInformationButtonsContainer>
        <InformationContainer>{typeOfInformation === 'description-info' ? descriptionText : techText}</InformationContainer>
      </div>
      <AddToBasket type="button">В корзину</AddToBasket>
    </ProductInformationContainer>
  );
};

export default ProductInformation;
